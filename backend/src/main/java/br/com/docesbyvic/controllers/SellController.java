package br.com.docesbyvic.controllers;

import br.com.docesbyvic.models.Payment;
import br.com.docesbyvic.models.Sell;
import br.com.docesbyvic.services.SellService;
import org.apache.tomcat.util.http.parser.HttpParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

// Responsável pelas rotas e comunicação externa da entidade Sell
@RestController
@RequestMapping("/sell")
public class SellController {

    @Autowired
    private SellService sellService;

    // Retorna todas as vendas
    @GetMapping
    public ResponseEntity<List<Sell>> getAllSells() {
        try {
            List<Sell> sells = sellService.getAllSells();
            if (sells.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(sells, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Busca uma venda por id
    @GetMapping("/{id}")
    public ResponseEntity<Sell> getSellById(@PathVariable Long id) {

        try {
            Sell sell = sellService.getSellById(id);
            return new ResponseEntity<>(sell, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    // Cria uma nova venda
    @PostMapping
    public ResponseEntity<Sell> createSell(@RequestBody Sell sell) {
        try {
            Sell createdSell = sellService.createSell(sell);
            return new ResponseEntity<>(createdSell, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    // Atualiza uma venda
    @PutMapping("/{id}")
    public ResponseEntity<Sell> updateSell(@PathVariable Long id, @RequestBody Sell sell) {
        try {
            Sell updatedSell = sellService.updateSell(id, sell);
            return new ResponseEntity<>(updatedSell, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Deleta uma venda
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSell(@PathVariable Long id) {
        try {
            sellService.deleteSell(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
