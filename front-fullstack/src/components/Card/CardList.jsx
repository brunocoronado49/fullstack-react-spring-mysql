import { Card } from './Card';
import './card.css';

export const CardList = ({
    handleProdSelected,
    handleRemove,
    products = []
}) => {
  return (
    <div className='card-list-container'>
        <h1>Productos</h1>
        <div className='list'>
            {
                products.map(prod => {
                    return (
                        <div className='list-row' key={prod.id}>
                            <div className='list-col'>
                                <Card
                                    key={prod.id}
                                    handlerProdSelected={handleProdSelected}
                                    handlerRemove={handleRemove}
                                    product={prod} />
                            </div>
                        </div>
                    );
                })
            }
        </div>
    </div>
  );
}
