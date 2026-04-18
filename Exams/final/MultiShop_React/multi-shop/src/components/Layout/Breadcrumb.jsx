import { useContext } from "react";
import { useLocation } from "react-router";
import { ProductContext } from "../../store/product-context";
import { formatCategoryName } from "../../utils/formatters";

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const { getProduct } = useContext(ProductContext);

  const getBreadcrumbItems = () => {
    const items = [{ label: "Home", path: "/" }];

    if (pathname === "/categories") {
      items.push({ label: "Shop", path: "/categories" });
      return items;
    }

    const categoryMatch = pathname.match(/^\/products\/category\/(.+)$/);
    if (categoryMatch) {
      const categorySlug = categoryMatch[1];
      const categoryName = formatCategoryName(categorySlug);

      items.push({ label: "Shop", path: "/categories" });
      items.push({ label: categoryName, path: pathname });
      return items;
    }

    const productMatch = pathname.match(/^\/products\/(\d+)$/);
    if (productMatch) {
      const productId = productMatch[1];
      const product = getProduct(productId);

      if (product) {
        items.push({ label: "Shop", path: "/categories" });
        items.push({
          label: formatCategoryName(product.category),
          path: `/products/category/${product.category}`,
        });
        items.push({ label: product.title, path: pathname });
      }
      return items;
    }

    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  if (pathname === "/") {
    return null;
  }

  return (
    <div className="container-fluid">
      <div className="row px-xl-5">
        <div className="col-12">
          <nav className="breadcrumb bg-light mb-30">
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1;

              return isLast ? (
                <span key={item.path} className="breadcrumb-item active">
                  {item.label}
                </span>
              ) : (
                <a
                  key={item.path}
                  className="breadcrumb-item text-dark"
                  href={item.path}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
