import { Buttons } from '../Buttons/Buttons';
import './card.css';

/// Componente para mostrar unicamente 
/// la informacion de cada producto en forma de tarjeta
/// desde aqui los productos se pueden actualizar y borrar
export const Card = ({
    handlerProdSelected,
    handlerRemove,
    product = {}
}) => {
  return (
    <div className='card-container'>
        <div className="card-info">
          <span>{product.productName} - {product.productCategory}</span>
          <p>{product.productDescription}</p>
          <p>Precio: {product.productPrice} $MXN</p>
        </div>
        <div className='card-buttons'>
            <Buttons text='Update' classBtn='success' onClick={() => 
                handlerProdSelected(product)
            } />
            <Buttons text='Delete' classBtn='danger' onClick={(event) => {
              event.preventDefault();
              handlerRemove(product.id);
            } 
          } />
        </div>
    </div>
  )
}
