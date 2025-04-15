package br.com.docesbyvic.services;

import br.com.docesbyvic.models.Client;
import br.com.docesbyvic.models.Sell;
import br.com.docesbyvic.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service // Indica que essa classe é um service (regra de negócio)
public class ClientService {

    @Autowired
    private ClientRepository clientRepository; // Injeção do repository para comunicação com o banco de dados

    // Busca um cliente específico por id
    public Client getClientById(Long id) {
        Optional<Client> client = clientRepository.findById(id);
        if (client.isPresent()) {
            return client.get();
        }
        throw new RuntimeException("Client not found with id: " + id);
    }

    public List<Sell> getSellListByClientId(Long id) {
        return clientRepository.findSellListByClientId(id);
    }

    // Cria um novo cliente
    public Client createClient(Client client) {
        return clientRepository.save(client);
    }

    // Atualiza um cliente existente
    public Client updateClient(Long id, Client updatedClient) {
        Client existingClient = getClientById(id); // verifica se existe
        existingClient.setName(updatedClient.getName());
        existingClient.setPhone(updatedClient.getPhone());
        existingClient.setDebt(updatedClient.getDebt());
        return clientRepository.save(existingClient);
    }

    // Deleta um cliente por id
    public void deleteClient(Long id) {
        Client client = getClientById(id); // verifica se existe
        clientRepository.delete(client);
    }

    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    public String getClientInfo(Long id) {
        Client client = clientRepository.findByIdWithPurchaseListAndSellList(id)
                .orElseThrow(() -> new RuntimeException("Client not found with id: " + id));

        var listSell = client.getPurchaseList().stream()
                .map(Object::toString)
                .collect(Collectors.joining("\n"));

        var listPayment = client.getPaymentList().stream()
                .map(Object::toString)
                .collect(Collectors.joining("\n"));

        return String.format("Name: %s / Debt: %s / Phone: %s \nCompras: \n%s \nPagamentos: \n%s",
                client.getName(), client.getDebt(), client.getPhone(), listSell, listPayment);
    }
}
