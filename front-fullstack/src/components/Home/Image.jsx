import Product from '../../assets/product.svg';
import './image-info.css';

export const Image = () => {
  return (
    <div className='img-container'>
        <img src={Product} alt="Product Image" />
    </div>
  )
}
