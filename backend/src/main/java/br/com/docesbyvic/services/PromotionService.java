package br.com.docesbyvic.services;

import br.com.docesbyvic.models.Payment;
import br.com.docesbyvic.models.Promotion;
import br.com.docesbyvic.repository.PromotionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

// Classe responsável pelas regras de negócio relacionadas à Promotion
@Service
public class PromotionService {

    @Autowired
    private PromotionRepository promotionRepository;

    // Salvar ou atualizar promoção
    public Promotion savePromotion(Promotion promotion) {
        return promotionRepository.save(promotion);
    }

    // Listar todas as promoções
    public List<Promotion> getAllPromotions() {
        return promotionRepository.findAll();
    }

    // Buscar promoção por id
    public Promotion getPromotionById(Long id) {
        Optional<Promotion> promotion = promotionRepository.findById(id);
        if (promotion.isPresent()) {
            return promotion.get();
        }
        throw new RuntimeException("Promotion not found with id: " + id);
    }

    // Deletar promoção por id
    public void deletePromotion(Long id) {
        promotionRepository.deleteById(id);
    }
}
