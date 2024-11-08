import React, { useState } from 'react';
import '../styles/HomePage.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';

const HomePage: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="home-page">
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="content-container">
                <div className="product-list-container">
                    <ProductList />
                </div>
                <Sidebar isOpen={isSidebarOpen} />
            </div>
        </div>
    );
};

export default HomePage;