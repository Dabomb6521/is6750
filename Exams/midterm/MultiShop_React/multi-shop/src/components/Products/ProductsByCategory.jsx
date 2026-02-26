import { useContext } from "react";
import { ProductContext } from "../../store/product-context";
import ProductList from "./ProductList";

const ProductsByCategory = ({ categoryName }) => {
  const {getProductsByCategory, loading} = useContext(ProductContext);
  const products = getProductsByCategory(categoryName)

  const formatCategoryName = (name) => {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="col-lg-9 col-md-8">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">{formatCategoryName(categoryName)}</span>
      </h2>

      {loading && (
        <div className="d-flex justify-content-center align-items-center" style={{minHeight: '300px'}}>
          <div className="spinner-border" role="status"></div>
        </div>
      )}
      {!loading && (
        <ProductList 
          products={products}
          rowClass="row pb-3"
          colClasses="col-lg-4 col-md-6 col-sm-6 pb-1"
        />
      )}
    </div>
  );
};

export default ProductsByCategory;
