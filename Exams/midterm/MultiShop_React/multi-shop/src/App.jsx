import CategoryList from "./components/Categories/CategoryList";
import Layout from "./components/Layout/Layout";
import FeaturedProducts from "./components/Products/FeaturedProducts";
import ProductTile from "./components/Products/ProductTile"

// Example of using Product Tile from question 5
// <ProductTile product={testProduct} />

function App() {
  
// Test product data


  const pathname = window.location.pathname;
  return (
    <>
      <Layout>
        {pathname === '/' && <FeaturedProducts />}
        {pathname === '/categories' && <CategoryList />}
      </Layout>
    </>
  );
}

export default App;
