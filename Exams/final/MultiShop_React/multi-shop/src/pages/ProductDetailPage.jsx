import { useParams } from "react-router";
import ProductDetail from "../components/Products/ProductDetail";

const ProductDetailPage = () => {
  const { productid } = useParams();

  return (
    <>
      <ProductDetail productId={productid} />;
    </>
  );
};

export default ProductDetailPage;
