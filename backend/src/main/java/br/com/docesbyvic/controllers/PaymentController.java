package br.com.docesbyvic.controllers;

import br.com.docesbyvic.models.Payment;
import br.com.docesbyvic.services.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

// Controlador responsável por expor os endpoints da API
@RestController
@RequestMapping("/payment")
public class PaymentController {

    @Autowired
    private PaymentService productService;

    // Endpoint para criar um novo produto
    @PostMapping
    public Payment createPayment(@RequestBody Payment product) {
        return productService.savePayment(product);
    }

    // Endpoint para buscar todos os produtos
    @GetMapping
    public List<Payment> getAllPayment() {
        return productService.getAllPayment();
    }

    // Endpoint para buscar produto por id
    @GetMapping("/{id}")
    public Payment getPaymentById(@PathVariable Long id) {
        return productService.getPaymentById(id);
    }

    // Endpoint para deletar produto por id
    @DeleteMapping("/{id}")
    public void deletePayment(@PathVariable Long id) {
        productService.deletePayment(id);
    }
}