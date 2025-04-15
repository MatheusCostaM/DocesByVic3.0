package br.com.docesbyvic.models;

import jakarta.persistence.*;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tipe;

    private String sabor;

    private Double value;

    public Product() {}

    public Product(String tipe, String sabor, Double value) {
        this.tipe = tipe;
        this.sabor = sabor;
        this.value = value;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSabor() {
        return sabor;
    }

    public void setSabor(String sabor) {
        this.sabor = sabor;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    public String getTipe() {
        return tipe;
    }

    public void setTipe(String tipe) {
        this.tipe = tipe;
    }

    @Override
    public String toString() {
        return String.format("ID: %s / Produto: %s-%s / Valor: R$%s",this.getId(), this.getTipe(), this.getSabor(), this.getValue());
    }
}
