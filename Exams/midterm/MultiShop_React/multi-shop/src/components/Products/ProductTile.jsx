const ProductTile = ({ product, colClasses="col-lg-3 col-md-4 col-sm-6 pb-1" }) => {
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
    <div class={colClasses}>
      <div class="product-item bg-light mb-4">
        <div class="product-img position-relative overflow-hidden">
          <img class="img-fluid w-100" src="img/product-1.jpg" alt="" />
          <div class="product-action">
            <a class="btn btn-outline-dark btn-square" href="">
              <i class="fa fa-shopping-cart"></i>
            </a>
            <a class="btn btn-outline-dark btn-square" href="">
              <i class="far fa-heart"></i>
            </a>
            <a class="btn btn-outline-dark btn-square" href="">
              <i class="fa fa-sync-alt"></i>
            </a>
            <a class="btn btn-outline-dark btn-square" href="">
              <i class="fa fa-search"></i>
            </a>
          </div>
        </div>
        <div class="text-center py-4">
          <a class="h6 text-decoration-none text-truncate" href={`/products/${product.id}`}>
            {product.title}
          </a>
          <div class="d-flex align-items-center justify-content-center mt-2">
            <h5>{product.price.toFixed(2)}</h5>
            {originalPrice && (
              <h6 class="text-muted ml-2">
                <del>{originalPrice.toFixed(2)}</del>
              </h6>
            )}
          </div>
          <div class="d-flex align-items-center justify-content-center mb-1">
            <small class="fa fa-star text-primary mr-1"></small>
            <small class="fa fa-star text-primary mr-1"></small>
            <small class="fa fa-star text-primary mr-1"></small>
            <small class="fa fa-star text-primary mr-1"></small>
            <small class="fa fa-star text-primary mr-1"></small>
            <small>(99)</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
