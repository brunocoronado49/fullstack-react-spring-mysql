package com.frangel.backend.Product;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    @Autowired
    private final ProductRepository productRepo;

    public ProductService (ProductRepository pRepository) {
        this.productRepo = pRepository;
    }

    public ArrayList<Product> getProducts() {
        return (ArrayList<Product>) productRepo.findAll();
    }

    public Optional<Product> getProduct(Integer id) {
        return productRepo.findById(id);
    }

    public Product createProduct(Product product) {
        return this.productRepo.save(product);
    }

    public Product updateProduct(Product product, Integer id) {
        Product newProduct = this.productRepo.findById(id).get();
        newProduct.setProductName(product.getProductName());
        newProduct.setProductDescription(product.getProductDescription());
        newProduct.setProductCategory(product.getProductCategory());
        newProduct.setProductPrice(product.getProductPrice());

        return this.productRepo.save(newProduct);
    }

    public boolean deleteProduct(Integer id) {
        try {
            this.productRepo.deleteById(id);
            return true;
        } catch(Exception error) {
            System.out.println("Error: " + error);
            return false;
        }
    }
}
