import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../store/cart-context";


const ProductTile = ({ product, colClasses }) => {
const {addItem} = useContext(CartContext)

const handleAddToCart = (e) => {
  e.preventDefault();
  addItem({
    id: product.id,
    title: product.title,
    price: product.price,
    thumbnail: product.thumbnail,
    quantity:1,
  })
}

  const calculateOriginalPrice = (price, discountPercentage) => {
    if (!discountPercentage) return null;

    const calculatedPrice = price / (1 - discountPercentage / 100);

    return calculatedPrice;
  };
  const originalPrice = calculateOriginalPrice(
    product.price,
    product.discountPercentage,
  );

  return (
    <div className={colClasses}>
      <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
          <img className="img-fluid w-100" src={product.thumbnail} alt={product.title} />
          <div className="product-action">
            <Link className="btn btn-outline-dark btn-square" to="#" onClick={handleAddToCart}>
              <i className="fa fa-shopping-cart"></i>
            </Link>
            <a className="btn btn-outline-dark btn-square" href="">
              <i className="far fa-heart"></i>
            </a>
            <a className="btn btn-outline-dark btn-square" href="">
              <i className="fa fa-sync-alt"></i>
            </a>
            <a className="btn btn-outline-dark btn-square" href="">
              <i className="fa fa-search"></i>
            </a>
          </div>
        </div>
        <div className="text-center py-4">
          <Link className="h6 text-decoration-none text-truncate" to={`/products/${product.id}`}>
            {product.title}
          </Link>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <h5>{product.price.toFixed(2)}</h5>
            {originalPrice && (
              <h6 className="text-muted ml-2">
                <del>{originalPrice.toFixed(2)}</del>
              </h6>
            )}
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1">
            <small className="fa fa-star text-primary mr-1"></small>
            <small className="fa fa-star text-primary mr-1"></small>
            <small className="fa fa-star text-primary mr-1"></small>
            <small className="fa fa-star text-primary mr-1"></small>
            <small className="fa fa-star text-primary mr-1"></small>
            <small>(99)</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
