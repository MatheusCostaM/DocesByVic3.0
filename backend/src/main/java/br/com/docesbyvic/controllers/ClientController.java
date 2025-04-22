package br.com.docesbyvic.controllers;

import br.com.docesbyvic.models.Client;
import br.com.docesbyvic.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // Tells Spring this class handles HTTP requests
@RequestMapping("/clients") // Base route: http://localhost:8080/clients
public class ClientController {

    @Autowired
    private ClientService clientService; // Injecting the service (business logic layer)

    // GET -> List all clients
    @GetMapping
    public ResponseEntity<List<Client>> getAllClients() {
        try {
            List<Client> clients = clientService.getAllClients();
            if (clients.isEmpty()) {
                return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(clients, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // GET -> Get client by id
    @GetMapping("/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable Long id) {

        try {
            Client client = clientService.getClientById(id);
            return new ResponseEntity<>(client, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

    }

    // POST -> Create new client
    @PostMapping
    public ResponseEntity<Client> createClient(@RequestBody Client client) {

        try {
            Client createdClient = clientService.createClient(client);
            return new ResponseEntity<>(createdClient, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    // PUT -> Update client
    @PutMapping("/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable Long id, @RequestBody Client client) {

        try {
            Client updatedClient = clientService.updateClient(id, client);
            return new ResponseEntity<>(updatedClient, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

    }

    // DELETE -> Delete client
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClient(@PathVariable Long id) {
        try {
            clientService.deleteClient(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
