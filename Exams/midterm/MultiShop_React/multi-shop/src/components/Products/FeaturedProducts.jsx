import { useContext } from "react";
import { ProductContext } from "../../store/product-context";
import ProductList from "./ProductList";

const FeaturedProducts = () => {
  const {getFeaturedProducts, loading} = useContext(ProductContext);
  const products = getFeaturedProducts(8);
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
      {!loading && (
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
