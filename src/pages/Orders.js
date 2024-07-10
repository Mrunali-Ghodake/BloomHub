import React from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
    return (
        <>
 <section id="error_page" className="section">
                <div className="container">
                    <div className="error_page_content">
                        <h2>No Orders Yet</h2>
                        <h2>Your order history is currently empty.</h2>
                        <h3>Please check back later or start shopping now.</h3>
                        <Link to="/" className="btn">Go Home</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Orders;