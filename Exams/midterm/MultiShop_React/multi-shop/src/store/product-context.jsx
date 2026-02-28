import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../utils/dataUtils";

export const ProductContext = createContext({
  products: [],
  getCategories: () => [],
  getProductsByCategory: (category) => [],
  getFeaturedProducts: (numProducts) => [],
  getProduct: (productID) => null,
});

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const cachedProducts = sessionStorage.getItem("products");

      if (cachedProducts) {
        console.log("Loading products from sessionStorage");
        setProducts(JSON.parse(cachedProducts));
        setLoading(false);
      } else {
        console.log("Fetching products from API");
        try {
          const data = await getAllProducts();
          setProducts(data);
          sessionStorage.setItem("products", JSON.stringify(data));
          setLoading(false);
        } catch (error) {
          console.log("Error fetching products: ", error);
          setLoading(false);
        }
      }
    };

    fetchProducts();
  }, []);

  const getCategories = () => {
    const categoryMap = {};

    if (!products || !Array.isArray(products)) {
      return [];
    }

    products.forEach((product) => {
      if (!categoryMap[product.category]) {
        categoryMap[product.category] = {
          name: formatCategoryName(product.category),
          slug: product.category,
          thumbnail: product.thumbnail,
          count: 0,
        };
      }
      categoryMap[product.category].count++;
    });
    return Object.values(categoryMap);
  };

  const formatCategoryName = (name) => {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const getProductsByCategory = (category) => {
    return products.filter((product) => product.category === category);
  };

  const getFeaturedProducts = (numProducts) => {
    return products.slice(0, numProducts);
  };

  const getProduct = (productID) => {
    return products.find((product) => product.id === parseInt(productID));
  };

  const contextValue = {
    products,
    loading,
    getCategories,
    getProductsByCategory,
    getFeaturedProducts,
    getProduct,
  };

  return <ProductContext value={contextValue}>{children}</ProductContext>;
};
