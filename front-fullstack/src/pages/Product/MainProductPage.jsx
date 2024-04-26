import { useProductHook } from '../../hooks/useProductHook';
import { CardList } from '../../components/Card/CardList';
import './product.css';

export const MainProductPage = () => {
    const {
        products,
        handlerDeleteProduct,
        handlerProductSelected
    } = useProductHook();

    return (
        <div className='main-product-page'>
            <div className='main-table'>
                <CardList products={products}
                    handleProdSelected={handlerProductSelected}
                    handleRemove={handlerDeleteProduct} />
            </div>
        </div>
    );
}
