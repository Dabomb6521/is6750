import { useState, useEffect } from "react";

import { getCategories } from "../../utils/dataUtils";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const [loadingCategory, setLoadingCategory] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategoryData = async () => {
      setLoadingCategory(true);
      setError(null);
      try {
        const data = await getCategories();
        setCategories(data);
        setLoadingCategory(false);
      } catch (error) {
        setError(error);
        setLoadingCategory(false);
      }
    };

    getCategoryData();
  }, []);

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
          {loadingCategory && (
            <div className="nav-item nav-link">Loading...</div>
          )}
          {error && (
            <div className="nav-item nav-link text-danger">
              Error loading categories
            </div>
          )}

          {!loadingCategory &&
            !error &&
            categories.map((category) => (
              <a
                key={category.slug}
                href={`/products/category/${category.slug}`}
                className="nav-item navelink"
              >
                {category.name}
              </a>
            ))}
        </div>
      </nav>
    </div>
  );
};

export default CategoryMenu;
