package com.frangel.backend.Product;

import jakarta.persistence.Basic;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Product {

    public Product() {}

    public Product(
        Integer id, 
        String productName, 
        String productDescription, 
        String productCategory,
        Double productPrice
    ) {
        this.id = id;
        this.productName = productName;
        this.productDescription = productDescription;
        this.productCategory = productCategory;
        this.productPrice = productPrice;
    }

    @Id // Especificamos que este campo es el identificador
    @GeneratedValue // Genera el id automaticamante
    private Integer id;
    @Basic // Indicamos que los otros campos seran basicos
    private String productName;
    private String productDescription;
    private String productCategory;
    private Double productPrice;
    
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getProductName() {
        return productName;
    }
    public void setProductName(String productName) {
        this.productName = productName;
    }
    public String getProductDescription() {
        return productDescription;
    }
    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }
    public String getProductCategory() {
        return productCategory;
    }
    public void setProductCategory(String productCategory) {
        this.productCategory = productCategory;
    }
    public Double getProductPrice() {
        return productPrice;
    }
    public void setProductPrice(Double productPrice) {
        this.productPrice = productPrice;
    }
}
