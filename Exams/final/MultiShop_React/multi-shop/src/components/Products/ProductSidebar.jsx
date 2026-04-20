const ProductSidebar = ({ products = [], selectedBrands, allSelected, onBrandChange, onAllChange }) => {
  const brands = [...new Set(products.map((p) => p.brand))];
  const getBrandCount = (brand) => products.filter((p) => p.brand === brand).length;

  return (
    <div className="col-lg-3 col-md-4">
      <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">Filter by Brand</span>
      </h5>
      <div className="bg-light p-4 mb-30">
        <form>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="brand-all"
              checked={allSelected}
              onChange={onAllChange}
            />
            <label className="custom-control-label" htmlFor="brand-all">
              All Brands
            </label>
            <span className="badge border font-weight-normal">{products.length}</span>
          </div>
          {brands.map((brand) =>(
            <div key={brand} className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input 
              type ="checkbox"
              className="custom-control-input"
              id={`brand-${brand}`}
              checked={allSelected || (selectedBrands && selectedBrands.includes(brand))}
              onChange={() => onBrandChange(brand)}
              />
              <label className="custom-control-label" htmlFor={`brand-${brand}`}>
                {brand}
              </label>
              <span className="badge border font-weight-normal">{getBrandCount(brand)}</span>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default ProductSidebar;
