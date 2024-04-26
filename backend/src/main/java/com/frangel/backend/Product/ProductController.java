package com.frangel.backend.Product;

import java.util.*;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/product")
public class ProductController {
    private final ProductService productSer;

    public ProductController(ProductService pService) {
        this.productSer = pService;
    }

    @GetMapping("/products")
    public ArrayList<Product> getProducts() {
        return this.productSer.getProducts();
    }

    @GetMapping("/products/{id}")
    public Optional<Product> getProduct(@PathVariable Integer id) {
        return this.productSer.getProduct(id);
    }

    @PostMapping("/create")
    public Product createProduct(@RequestBody Product product) {
        return this.productSer.createProduct(product);
    }

    @PutMapping("/update/{id}")
    public Product updateProduct(@RequestBody Product product, @PathVariable Integer id) {
        return this.productSer.updateProduct(product, id);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteProduct(@PathVariable Integer id) {
        boolean product = this.productSer.deleteProduct(id);
        if (product) {
            return "Producto con id: " + id + " eliminado";
        }
        return "Error al eliminar el producto";
    } 
}
