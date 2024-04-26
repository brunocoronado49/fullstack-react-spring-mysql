import axios from 'axios';

const baseURI = 'http://localhost:8080/product';

/// Funcion para traerme todos los prtoductos
export const getProducts = async () => {
    try {
        const response = await axios.get(`${baseURI}/products`);
        const result = await response.data;
        return result;
    } catch(error) {
        console.log(`Ocurrio un error al tomar los productos: ${error.message}`);
        return;
    }
}

/// Funcion para crear un nuevo producto
export const createProduct = async (product) => {
    try {
        const response = await axios.post(`${baseURI}/create`, {...product});
        return response;
    } catch(error) {
        console.log(`Error al crear producto: ${error.message}`);
        return;
    }
}

/// Funcion para actualizar los productos
export const updateProduct = async (id, product) => {
    try {
        const response = await axios(`${baseURI}/update/${id}`, {...product});
        return response;
    } catch(error) {
        console.log(`Error al actualizar producto: ${error.message}`);
        return;
    }
}

/// Funcion para eliminar los productos
export const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`${baseURI}/delete/${id}`);
        return response;
    } catch(error) {
        console.log(`Error al eliminar producto: ${error.message}`);
        return;
    }
}
