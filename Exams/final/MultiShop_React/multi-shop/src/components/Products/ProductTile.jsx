const ProductTile = ({ product, colClasses }) => {
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
            <a className="btn btn-outline-dark btn-square" href="">
              <i className="fa fa-shopping-cart"></i>
            </a>
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
          <a className="h6 text-decoration-none text-truncate" href={`/products/${product.id}`}>
            {product.title}
          </a>
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
