import React from 'react';
import styles from '../styles/Navbar.module.css';

interface NavbarProps {
        toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => (
    <nav className={styles.navbar}>
            <div className={styles['navbar-headers']}>
                    <a href="" className={styles.link}>Товары</a>
                    <a href="" className={styles.link}>Склады</a>
                    <a href="" className={styles.link}>О системе</a>
                    <a href="" className={styles.link}>Личная страница</a>
            </div>
            <button onClick={toggleSidebar} className={styles['toggle-button']}>
                    <div className={styles['burger-icon']}>
                            <span></span>
                            <span></span>
                            <span></span>
                    </div>
            </button>
    </nav>
);

export default Navbar;