import ProductTile from "./ProductTile";

const ProductList = ({ products, rowClass, colClasses }) => {
  return (
    <div className={rowClass}>
      {products.map((product) => (
        <ProductTile
          key={products.id}
          product={product}
          colClasses={colClasses}
        />
      ))}
    </div>
  );
};

export default ProductList;
