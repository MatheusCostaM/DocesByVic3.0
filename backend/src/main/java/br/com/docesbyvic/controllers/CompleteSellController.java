package br.com.docesbyvic.controllers;

import br.com.docesbyvic.models.CompleteSell;
import br.com.docesbyvic.services.CompleteSellService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/complete-sell")
public class CompleteSellController {

    private final CompleteSellService completeSellService;

    public CompleteSellController(CompleteSellService completeSellService) {
        this.completeSellService = completeSellService;
    }

    @GetMapping
    public ResponseEntity<List<CompleteSell>> getAll() {

        try {
            List<CompleteSell> sells = completeSellService.findAll();
            if (sells.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(sells, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<CompleteSell> getById(@PathVariable Long id) {
        try {
            CompleteSell completeSell = completeSellService.findById(id);
            return new ResponseEntity<>(completeSell, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<CompleteSell> create(@RequestBody CompleteSell completeSell) {

        try {
            CompleteSell createdSell = completeSellService.save(completeSell);
            return new ResponseEntity<>(createdSell, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {

        try {
            completeSellService.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }
}
