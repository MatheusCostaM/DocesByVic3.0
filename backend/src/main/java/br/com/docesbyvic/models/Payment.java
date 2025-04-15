package br.com.docesbyvic.models;

import jakarta.persistence.*;

@Entity
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double value;

    private String date;

    @ManyToOne
    private Client client;

    public Payment(){}

    public Payment(Double value, String date, Client client){
        this.value = value;
        this.date = date;
        this.client = client;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    @Override
    public String toString(){
        return String.format("Data: %s / Cliete: %s / Valor: %s", getDate(), getClient().getName(),getValue());
    }
}
