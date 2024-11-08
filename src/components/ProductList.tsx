import React, { useState } from 'react';
import '../styles/ProductList.css';
import ProductCard from './ProductCard';
import Modal from './ModalWindow';

type Product = {
    name: string;
    description: string;
    category: string;
    quantity: number;
    unit: string;
    imageUrl?: string;
};

const ProductList: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const products: Product[] = [
        { name: 'Product A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus.', category: 'Category A', quantity: 1, unit: 'lb', imageUrl: 'https://bee-master.ru/wp-content/uploads/5/7/a/57a3da20da775e5e93c496b3192fe631.jpeg' },
        { name: 'Product B', description: 'Lorem ipsum dolor sit amet.', category: 'Category B', quantity: 10, unit: 'kg', imageUrl: '' },
        { name: 'Product C', description: 'Lorem ipsum dolor sit amet.', category: 'Category C', quantity: 5, unit: 'l', imageUrl: '' },

    ];

    const handleCardClick = (product: Product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <ProductCard key={index} {...product} onClick={() => handleCardClick(product)} />
            ))}
            <Modal isOpen={!!selectedProduct} onClose={handleCloseModal}>
                {selectedProduct && (
                    <div>
                        {selectedProduct.imageUrl ? <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="product-image" /> : <div className="no-image">No Image</div>}
                        <h3 className="product-name">{selectedProduct.name}</h3>
                        <p className="product-description">{selectedProduct.description}</p>
                        <p className="product-category">Category: {selectedProduct.category}</p>
                        <p className="product-quantity">Quantity: {selectedProduct.quantity} {selectedProduct.unit}</p>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default ProductList;