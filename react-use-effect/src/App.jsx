import './App.css'
import {useEffect, useState} from "react";
import ProductCard from "./component/ProductCard.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Navbar from "./component/Navbar.jsx";

function App() {

    // useEffect(fonksiyon, [değişkenler]) 2. parametre dependency array
    //    useEffect(() => {
    //        console.log('useEffect çalıştı')
    //    }, []);
    // dependency array boş ise sadece bir kere çalışır
    // ve component ilk render olduğunda çalışır.

    // useEffect(() => {
    //     console.log('count değişti' + count)
    // }, [count]);

    // count değiştiğinde çalışır
    return (
        <>

            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/product-detail/:id" element={<ProductDetail/>}/>
                </Routes>


            </BrowserRouter>

        </>
    )
}

export default App
