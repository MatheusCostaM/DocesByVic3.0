package br.com.docesbyvic.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/api/test")
    public String testConnection() {
        return "Conexão feita com sucesso!";
    }
}