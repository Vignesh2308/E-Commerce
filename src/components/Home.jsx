import React, { useState } from "react";
import '../App.css';
import Header from "./Header";
import Card from "./Card";
import SideNav from "./SideNav";
import productData from '../data/products.json'

const Home = () => {
    const [category, setCategory] = useState('');
    const [products, setProducts] = useState(productData);
    const [productSearchText, setProductSearchText] = useState('');

    const handleProductSearch = (e) => {
        setProductSearchText(e.target.value)
        let filteredProductList;
        if (category === '') {
            filteredProductList = productData.filter((item) =>
                item.title.toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase())
            );
        }
        else {
            filteredProductList = productData.filter((item) =>
                item.category === category && item.title.toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase())
            );
        }

        setProducts(filteredProductList);
    }

    const handleCategory = (e) => {
        setCategory(e.target.value);
        setProductSearchText('');
        let filteredProductList;
        if (e.target.value !== '')
            filteredProductList = productData.filter(item => item.category === e.target.value)
        else filteredProductList = productData;
        setProducts(filteredProductList);
    }

    return (
        <div className="container">
            <header className="header">
                <Header />
            </header>
            <nav className="side-nav">
                <SideNav
                    category={category}
                    handleCategory={handleCategory}
                    handleProductSearch={handleProductSearch}
                    productSearchText={productSearchText}
                />
            </nav>
            <article className="main-content">
                {products.map((product) => {
                    return <Card product={product} key={product.id} />
                })}
            </article>
            <footer className="footer">
                Developed by Vignesh
            </footer>
        </div>
    )
}

export default Home;