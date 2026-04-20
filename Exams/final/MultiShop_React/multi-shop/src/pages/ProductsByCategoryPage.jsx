import { useState, useContext } from "react";
import { useParams } from "react-router";
import Container from "../components/Layout/Container";
import ProductSidebar from "../components/Products/ProductSidebar";
import ProductsByCategory from "../components/Products/ProductsByCategory";
import { ProductContext } from "../store/product-context";

const ProductsByCategoryPage = () => {
  const { categoryname } = useParams();
  const { getProductsByCategory, loading } = useContext(ProductContext);
  const products = getProductsByCategory(categoryname);

  const [selectedBrands, setSelectedBrands] = useState(null);

  const brands = [...new Set(products.map((p) => p.brand))];
  const allSelected = selectedBrands === null || brands.every((b) => selectedBrands.includes(b));

  const handleBrandChange = (brand) => {
    const current = selectedBrands ?? brands;
    setSelectedBrands( 
      current.includes(brand) ? current.filter((b) => b !== brand) : [...current, brand]
    );
  };

  const handleAllChange = () => {
    setSelectedBrands(allSelected ? [] : null);
  };

  const filteredProducts = selectedBrands === null ? products : products.filter((p) => selectedBrands.includes(p.brand));


  return (
    <Container className="container-fluid">
      <Container className="row px-xl-5">
        <ProductSidebar
          products={products}
          selectedBrands={selectedBrands}
          allSelected={allSelected}
          onBrandChange={handleBrandChange}
          onAllChange={handleAllChange}
        />
        <ProductsByCategory
          categoryName={categoryname}
          products={filteredProducts}
          loading={loading}
        />
      </Container>
    </Container>
  );
};

export default ProductsByCategoryPage;
