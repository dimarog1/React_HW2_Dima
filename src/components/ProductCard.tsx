import React from 'react';
import '../styles/ProductCard.css';

type ProductCardProps = {
    name: string;
    description: string;
    category: string;
    quantity: number;
    unit: string;
    imageUrl?: string;
    onClick: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, description, category, quantity, unit, imageUrl, onClick }) => (
    <div className="product-card" onClick={onClick}>
        {imageUrl ? <img src={imageUrl} alt={name} className="product-image" /> : <img alt="No Image" className="no-image" />}
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-category">Category: {category}</p>
        <p className="product-quantity">Quantity: {quantity} {unit}</p>
    </div>
);

export default ProductCard;