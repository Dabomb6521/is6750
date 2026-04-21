import { ProductContextProvider } from "./store/product-context";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsByCategoryPage from "./pages/ProductsByCategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";
import { action as contactAction } from "./pages/ContactPage";
import SignUpPage from "./pages/SignUpPage";
import { action as signupAction } from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { action as loginAction } from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <p>The page could not be found.</p>,
    children: [
      { index: true, Component: HomePage },
      { path: "categories", Component: CategoriesPage },
      {
        path: "products/category/:categoryname",
        Component: ProductsByCategoryPage,
      },
      { path: "products/:productid", Component: ProductDetailPage },
      { path: "contact", Component: ContactPage, action: contactAction },
      { path: "signup", Component: SignUpPage, action: signupAction },
      { path: "login", Component: LoginPage, action: loginAction },
    ],
  },
]);

function App() {
  return (
    <ProductContextProvider>
      <RouterProvider router={router} />
    </ProductContextProvider>
  );
}

export default App;
