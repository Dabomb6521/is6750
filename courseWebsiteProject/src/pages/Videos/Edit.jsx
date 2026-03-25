import { Save } from "@mui/icons-material";
import { Button, FormControl, TextField } from "@mui/material";
import axios from "axios";
import { Suspense } from "react";

import {
  Await,
  redirect,
  useLoaderData,
  Form,
  useActionData,
} from "react-router";
import { isValidUrl } from "../../utils/validate";

const EditVideo = () => {
  const { data: video, playlists } = useLoaderData();
  const errors = useActionData();

  return (
    <>
      <Form method="post">
        <FormControl fullWidth>
          <TextField defaultValue={video.title} name="title" />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            defaultValue={video.youtubeUrl}
            name="url"
            helperText={errors && errors.message}
            error={errors}
          />
        </FormControl>
        <select name="playlist">
          <Suspense fallback={<option>Loading...</option>}>
            <Await resolve={playlists}>
              {(awaitedPlaylists) =>
                awaitedPlaylists.map((playlist) => (
                  <option key={playlist.id} value={playlist.id}>
                    {playlist.title}
                  </option>
                ))
              }
            </Await>
            <option>Playlist 1</option>
          </Suspense>
        </select>
        <FormControl fullWidth>
          <Button type="submit">
            <Save />
          </Button>
        </FormControl>
      </Form>
    </>
  );
};

export default EditVideo;

const wait = (ms) => new Promise((res) => setTimeout(res, ms));

const getData = async () => {
  await wait(5000);
  const { data } = await axios.get("http://localhost:3000/playlists");
  return data;
};

export const action = async ({ request, params }) => {
  const { id } = params;
  const submittedForm = await request.formData();
  const title = submittedForm.get("title");
  const youtubeUrl = submittedForm.get("url");

  if (isValidUrl(youtubeUrl)) {
    try {
      await axios.put("http://localhost:3000/videos/" + id, {
        id,
        title,
        youtubeUrl,
      });
      return redirect("/video");
    } catch (e) {
      return { code: 500, message: e };
    }
  }

  return {
    code: 400,
    message: "URL is invalid please ensure it is valid embed link",
  };
};

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`http://localhost:3000/videos/${id}`);
  const playlists = getData();
  return { data, playlists };
};
