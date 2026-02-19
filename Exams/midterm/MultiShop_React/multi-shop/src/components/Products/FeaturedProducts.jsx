import { useState, useEffect } from "react";
import { getAllProducts } from "../../utils/dataUtils";
import ProductList from "./ProductList";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllProductsData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getAllProducts();
        const featuredProducts = data.slice(0, 8);
        setProducts(featuredProducts);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getAllProductsData();
  }, []);

  return (
    <div className="container-fluid pt-5 pb-3">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Featured Products</span>
      </h2>
      {loading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "300px" }}
        >
          <div className="spinner-border" role="status">
          </div>
        </div>
      )}
      {error && (
        <div className="d-flex justify-content-center">
        <div className="alert alert-danger mx-xl-5" role="alert" style={{maxWidth: '600px'}}>
          <strong>Error!</strong> Unable to load featured products.
        </div>
        </div>
      )}
      {!loading && !error && (
        <ProductList
          products={products}
          rowClass="row px-xl-5"
          colClasses="col-lg-3 col-md-4 col-sm-6 pb-1"
        />
      )}
    </div>
  );
};

export default FeaturedProducts;
