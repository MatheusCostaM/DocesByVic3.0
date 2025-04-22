package br.com.docesbyvic.services;

import br.com.docesbyvic.models.Client;
import br.com.docesbyvic.models.Payment;
import br.com.docesbyvic.repository.PaymentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    private final PaymentRepository paymentRepository;

    public PaymentService(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    public List<Payment> getAllPayment() {
        return paymentRepository.findAll();

    }

    public Payment savePayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    public void deletePayment(Long id) {
        paymentRepository.deleteById(id);
    }

    public Payment getPaymentById(Long id) {

        Optional<Payment> payment = paymentRepository.findById(id);

        if (payment.isPresent()) {
            return payment.get();
        }
        throw new RuntimeException("Payment not found with id: " + id);

    }
}
