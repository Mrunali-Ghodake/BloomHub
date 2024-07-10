import React from 'react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    return (
        <>
 <section id="error_page" className="section">
                <div className="container">
                    <div className="error_page_content">
                        <h2>No Items in Wishlist</h2>
                        <h2>Your wishlist is currently empty.</h2>
                        <h3>Start adding items to your wishlist now.</h3>
                        <Link to="/" className="btn">Go Home</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Wishlist;