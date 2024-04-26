import { useProductHook } from '../../hooks/useProductHook';
import { Form } from '../../components/index';

export const Create = () => {
  const {
    productSelected,
    handlerCreateProduct,
  } = useProductHook();

  return <Form 
    productSelected={productSelected}
    handlerCreateProduct={handlerCreateProduct} />;
}
