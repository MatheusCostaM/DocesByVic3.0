package br.com.docesbyvic.repository;

import br.com.docesbyvic.models.Client;
import br.com.docesbyvic.models.Sell;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

    @Query("SELECT c.purchaseList FROM Client c WHERE c.id = :id")
    List<Sell> findSellListByClientId(@Param("id") Long id);

    @Query("SELECT c FROM Client c " +
            "LEFT JOIN FETCH c.purchaseList p " +
            "LEFT JOIN FETCH p.sellList " +
            "WHERE c.id = :id")
    Optional<Client> findByIdWithPurchaseListAndSellList(@Param("id") Long id);





}