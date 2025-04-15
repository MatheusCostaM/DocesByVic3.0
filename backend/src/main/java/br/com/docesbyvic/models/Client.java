package br.com.docesbyvic.models;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Entity
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String phone;

    private Double debt;

    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<CompleteSell> purchaseList = new HashSet<>();

    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<Payment> paymentList = new HashSet<>();


    public Client() {}

    public Client(String name) {
        this.name = name;
        this.phone = "";
        this.debt = 0.0;
    }

    public Client(String name, String phone) {
        this.name = name;
        this.phone = phone;
        this.debt = 0.0;
    }

    public Set<Payment> getPaymentList() {
        return paymentList;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Double getDebt() {
        return debt;
    }

    public void setDebt(Double debt) {
        this.debt = debt;
    }

    public Set<CompleteSell> getPurchaseList() {
        return purchaseList;
    }

    public void addPurchase(CompleteSell purchase) {
        this.purchaseList.add(purchase);
        purchase.setClient(this);
    }

    public void addPayment(Payment payment) {
        this.paymentList.add(payment);
        payment.setClient(this);
    }

    @Override
    public String toString() {
        return "ID: "+ id +" / Name: " + name + " / Debt: " + debt + " / Phone: " + phone;
    }
}
