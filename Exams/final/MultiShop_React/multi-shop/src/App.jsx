import { ProductContextProvider } from "./store/product-context";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsByCategoryPage from "./pages/ProductsByCategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage, { action as contactAction } from "./pages/ContactPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import {
  signupAction,
  loginAction,
  logoutLoader,
  authStatusLoader,
} from "./utils/auth";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import { useContext } from "react";
import { CartContext } from "./store/cart-context";
import CheckoutPage, { action as checkoutAction } from "./pages/CheckoutPage";

function App() {
  const cartContext = useContext(CartContext);

  const router = createBrowserRouter([
    {
      path: "/",
      id: "root",
      Component: Layout,
      errorElement: <p>The page could not be found.</p>,
      loader: authStatusLoader,
      children: [
        { index: true, Component: HomePage },
        {
          path: "categories",
          lazy: async () => {
            const module = await import("./pages/CategoriesPage");
            return { Component: module.default };
          },
        },
        {
          path: "products/category/:categoryname",
          lazy: async () => {
            const module = await import("./pages/ProductsByCategoryPage");
            return { Component: module.default };
          },
        },
        {
          path: "products/:productid",
          lazy: async () => {
            const module = await import("./pages/ProductDetailPage");
            return { Component: module.default };
          },
        },
        {
          path: "contact",
          action: contactAction,
          lazy: async () => {
            const module = await import("./pages/ContactPage");
            return { Component: module.default };
          },
        },
        {
          path: "signup",
          action: signupAction,
          lazy: async () => {
            const module = await import("./pages/SignUpPage");
            return { Component: module.default };
          },
        },
        {
          path: "login",
          action: loginAction,
          lazy: async () => {
            const module = await import("./pages/LoginPage");
            return { Component: module.default };
          },
        },
        {
          path: "cart",
          lazy: async () => {
            const module = await import("./pages/ShoppingCartPage");
            return { Component: module.default };
          },
        },
        {
          path: "checkout",
          action: checkoutAction(cartContext),
          lazy: async () => {
            const module = await import("./pages/CheckoutPage");
            return { Component: module.default };
          },
        },
      ],
    },
    { path: "logout", loader: logoutLoader },
  ]);

  return (
    <ProductContextProvider>
      <RouterProvider router={router} />
    </ProductContextProvider>
  );
}

export default App;
