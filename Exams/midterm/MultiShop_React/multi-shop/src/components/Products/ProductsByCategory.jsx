import { useState, useEffect } from "react";

import { getProductsByCategory } from "../../utils/dataUtils";
import ProductList from "./ProductList";

const ProductsByCategory = ({ categoryName }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getProductsByCategory(categoryName);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchCategoryProducts();
  }, [categoryName]);

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

      {error && (
        <div className="d-flex justify-content-center">
          <div className="alert alert-danger mx-xl-5" role="alert" style={{maxWidth: '600px'}}>
            <strong>Error!</strong> Unable to load products for this category.
          </div>
        </div>
      )}
      {!loading && !error && (
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
