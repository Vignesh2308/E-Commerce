
const SideNav = (props) => {
    const { category, handleProductSearch, handleCategory, productSearchText } = props;
    return (
        <>
            <h4>Search By Category:</h4>
            <select value={category} onChange={(e) => handleCategory(e)}>
                <option value="">All</option>
                <option value="mensClothing">Men's Cloting</option>
                <option value="womensClothing">Women's Cloting</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
            </select>
            <h4>Search By Product:</h4>
            <input placeholder="Search Product" type="text" className="productSearch" value={productSearchText} onChange={(e) => handleProductSearch(e)} />
        </>
    )
}

export default SideNav