import { useParams } from "react-router";
import Container from "../components/Layout/Container";
import ProductSidebar from "../components/Products/ProductSidebar";
import ProductsByCategory from "../components/Products/ProductsByCategory";

const ProductsByCategoryPage = () => {
  const { categoryname } = useParams();

  return (
    <Container className="container-fluid">
      <Container className="row px-xl-5">
        <ProductSidebar />
        <ProductsByCategory categoryName={categoryname} />
      </Container>
    </Container>
  );
};

export default ProductsByCategoryPage;
