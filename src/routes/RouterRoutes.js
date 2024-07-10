import React from 'react';
import { Routes, Route } from 'react-router';
import useScrollRestore from '../hooks/useScrollRestore';
import AllProducts from '../pages/AllProducts';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import ErrorPage from '../pages/ErrorPage';
import Shiptracking from '../pages/shiptracking';
import Orders from '../pages/Orders';
import Wishlist from '../pages/Wishlist';

const RouterRoutes = () => {

    useScrollRestore();

    return (
        <>
            <Routes>
                <Route path= '/shiptracking' element={<Shiptracking/>} />
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/product-details/:productId" element={<ProductDetails />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/orders" element={<Orders />} ></Route>
                <Route path="/wishlist" element={<Wishlist />} ></Route>
            </Routes>
        </>
    );
};

export default RouterRoutes;