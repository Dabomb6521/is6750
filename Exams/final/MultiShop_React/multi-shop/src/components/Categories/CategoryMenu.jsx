import { useContext } from "react";
import { Link } from "react-router";
import { ProductContext } from "../../store/product-context";

const CategoryMenu = () => {
  const {getCategories, loading } = useContext(ProductContext);
  const categories = getCategories();

  return (
    <div className="col-lg-3 d-none d-lg-block">
      <a
        className="btn d-flex align-items-center justify-content-between bg-primary w-100"
        data-toggle="collapse"
        href="#navbar-vertical"
        style={{ height: 65, padding: "0 30px" }}
      >
        <h6 className="text-dark m-0">
          <i className="fa fa-bars mr-2"></i>Categories
        </h6>
        <i className="fa fa-angle-down text-dark"></i>
      </a>
      <nav
        className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
        id="navbar-vertical"
        style={{ width: "calc(100% - 30px)", zIndex: "999" }}
      >
        <div className="navbar-nav w-100">
          {loading && (
            <div className="nav-item nav-link">Loading...</div>
          )}

          {!loading &&
            categories.map((category) => (
              <Link
                key={category.slug}
                to={`/products/category/${category.slug}`}
                className="nav-item nav-link"
              >
                {category.name}
              </Link>
            ))}
        </div>
      </nav>
    </div>
  );
};

export default CategoryMenu;
