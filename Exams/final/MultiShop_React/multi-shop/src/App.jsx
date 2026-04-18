import CategoryList from "./components/Categories/CategoryList";
import Layout from "./components/Layout/Layout";
import FeaturedProducts from "./components/Products/FeaturedProducts";
import ProductSidebar from "./components/Products/ProductSidebar";
import Container from "./components/Layout/Container";
import ProductsByCategory from "./components/Products/ProductsByCategory";
import ProductDetail from "./components/Products/ProductDetail";
import { ProductContextProvider } from "./store/product-context";

function App() {
  const pathname = window.location.pathname;

  // Regex check for pathname to match /products/category/[category-name]
  const categoryMatch = pathname.match(/^\/products\/category\/(.+)$/);
  const productMatch = pathname.match(/^\/products\/(\d+)$/);

  

  return (
    <>
      <ProductContextProvider>
        <Layout pathname={pathname}>
          {pathname === "/" && <FeaturedProducts />}
          {pathname === "/categories" && <CategoryList />}
          {categoryMatch && (
            <Container className="container-fluid">
              <Container className="row px-xl-5">
                <ProductSidebar />
                <ProductsByCategory categoryName={categoryMatch[1]} />
              </Container>
            </Container>
          )}
          {productMatch && (
            <>
              <ProductDetail productId={productMatch[1]} />
            </>
          )}
        </Layout>
      </ProductContextProvider>
    </>
  );
}

export default App;
