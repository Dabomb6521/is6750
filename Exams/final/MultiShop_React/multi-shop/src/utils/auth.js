import axios from "axios";
import { redirect } from "react-router";
import db from "./db";
import store from "../store/store";
import { setUser, clearUser } from "../store/auth";

const FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

async function sendAuthRequest(email, password, endpoint) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${endpoint}?key=${FIREBASE_API_KEY}`,
    { email, password, returnSecureToken: true },
  );
  return response;
}

export async function signupAction({ request }) {
  const formData = await request.formData();
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await sendAuthRequest(email, password, "signUp");
    const { idToken, localId, expiresIn } = response.data;

    const expiration = new Date();
    expiration.setSeconds(expiration.getSeconds() + parseInt(expiresIn));

    const userData = {
      firstName,
      lastName,
      email,
      localId,
      token: idToken,
      expiration: expiration.toISOString(),
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    store.dispatch(setUser(userData));

    await db.put(`/users/${localId}.json`, {
      firstName,
      lastName,
      email,
      localId,
    });

    return redirect("/");
  } catch (error) {
    return error;
  }
}

export async function loginAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await sendAuthRequest(
      email,
      password,
      "signInWithPassword",
    );
    const { idToken, localId, expiresIn } = response.data;

    const expiration = new Date();
    expiration.setSeconds(expiration.getSeconds() + parseInt(expiresIn));

    const userRecord = await db.get(`/users/${localId}.json`);
    const { firstName, lastName } = userRecord.data;

    const userData = {
      firstName,
      lastName,
      email,
      localId,
      token: idToken,
      expiration: expiration.toISOString(),
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    store.dispatch(setUser(userData));

    return redirect("/");
  } catch (error) {
    return error;
  }
}

export function logoutLoader() {
  localStorage.removeItem("userData");
  store.dispatch(clearUser());
  return redirect("/");
}

export function authStatusLoader() {
  const raw = localStorage.getItem("userData");
  if (!raw) return null;

  const userData = JSON.parse(raw);

  if (new Date(userData.expiration) < new Date()) {
    localStorage.removeItem("userData");
    store.dispatch(clearUser());
    return redirect("/logout");
  }

  store.dispatch(setUser(userData));
  return userData;
}
