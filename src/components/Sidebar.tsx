import React from 'react';
import styles from '../styles/Sidebar.module.css';

interface SidebarProps {
    isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => (
    <div className={isOpen ? styles.sidebar : styles.closed}>
        <input type="text" className={styles.input} />
        <label className={styles.label}>
            <input type="checkbox" /> Ненулевое количество
        </label>
        <select className={styles.select}>
            <option value="">Выберите категорию</option>
            <option value="cat1">Category 1</option>
        </select>
    </div>
);

export default Sidebar;