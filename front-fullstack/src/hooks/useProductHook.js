import { useState, useEffect } from 'react';
import { initialData } from '../helpers/index';
import {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct
} from '../services/productService';

export const useProductHook = () => {
    const [products, setProducts] = useState([]);
    const [productSelected, setProductSelected] = useState(initialData);

    const getProductsApi = async () => {
        const data = await getProducts();
        setProducts(data);
    }

    useEffect(() => {
        getProductsApi();
    }, []);

    const handlerCreateProduct = async (product) => {
        if (product.id > 0) {
          const result = await updateProduct(product.id, product);
          setProducts(products.map(prod => {
            if (prod.id === result.data.id) {
              return {...result.data};
            }
          }));
        } else {
          const result = await createProduct(product);
          setProducts([...products, {...result.data}]);
        }
    }

    const handlerDeleteProduct = async (id) => {
        await deleteProduct(id);
        setProducts([products.filter(prod => prod.id != id)]);
    }
    
    const handlerProductSelected = (product) => {
        setProductSelected({...product});
    }

    return {
        products,
        productSelected,
        handlerCreateProduct,
        handlerDeleteProduct,
        handlerProductSelected
    };
}
