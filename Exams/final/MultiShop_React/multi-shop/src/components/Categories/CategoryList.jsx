import { useContext } from "react";
import { Link } from "react-router";
import { ProductContext } from "../../store/product-context";
import { formatCategoryName } from "../../utils/formatters";

const CategoryList = () => {
  const { getCategories, loading } = useContext(ProductContext);
  const categories = getCategories();

  return (
    <div className="container-fluid pt-5">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Categories</span>
      </h2>
      <div className="row px-xl-5 pb-3">
        {loading && (
          <div className="col-12 text-center">Loading Categories...</div>
        )}
        {!loading &&
          categories.map((category) => (
            <div
              key={category.name}
              className="col-lg-3 col-md-4 col-sm-6 pb-1"
            >
              <Link
                className="text-decoration-none"
                to={`/products/category/${category.slug}`}
              >
                <div className="cat-item d-flex align-items-center mb-4">
                  <div
                    className="overflow-hidden"
                    style={{ width: 100, height: 100 }}
                  >
                    <img
                      className="img-fluid"
                      src={category.thumbnail}
                      alt={category.name}
                    />
                  </div>
                  <div className="flex-fill pl-3">
                    <h6>{formatCategoryName(category.name)}</h6>
                    <small className="text-body">
                      {category.count} Products
                    </small>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryList;
