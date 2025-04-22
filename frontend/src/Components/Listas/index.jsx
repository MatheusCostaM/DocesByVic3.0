import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Produto, Cliente, Promocao } from "../ComponentsDB";

const Lista = styled.div`

background: gray;
width: 50vw;
height: 100%;

`;

export const ProdutosLista = ({ newProduto }) => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        searchProducts();
    }, [newProduto]);

    const searchProducts = () => {
        fetch("http://localhost:8080/products")
            .then((response) => response.json())
            .then((data) => {
                setProdutos(data);
                console.log("Sucesso ao buscar os produtos");
            })
            .catch((error) => console.error("Erro ao buscar os produtos:", error));
    }

    const deleteProduct = ($id) => {
        fetch(`http://localhost:8080/products/${$id}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (!response.ok) {
                    console.log($id);
                    throw new Error("Erro ao deletar produto");
                }
                console.log("Produto deletado com sucesso");

            })
            .catch((error) => {
                console.error("Erro ao deletar o Produto:", error);
            });

        searchProducts();
    };

    return (
        <Lista>
            <h1>Produtos</h1>
            {produtos.map((produto) => (
                <Produto
                    key={produto.id}
                    $id={produto.id}
                    $type={produto.tipe}
                    $sabor={produto.sabor}
                    $value={produto.value}
                    deleteProduct={deleteProduct}
                />
            ))}
        </Lista>
    );
};

export const PromocoesLista = ({ newPromocao }) => {
    const [promocoes, setPromocoes] = useState([]);

    useEffect(() => {
        buscarPromocoes();
    }, [newPromocao]);

    const buscarPromocoes = () => {
        fetch("http://localhost:8080/promotions")
            .then((response) => response.json())
            .then((data) => {
                setPromocoes(data);
                console.log("Promoções carregadas com sucesso");
            })
            .catch((error) => console.error("Erro ao buscar promoções:", error));
    };

    const deletePromotion = (id) => {
        fetch(`http://localhost:8080/promotions/${id}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao deletar promoção");
                }
                console.log("Promoção deletada com sucesso");

                setPromocoes(promocoes.filter(promocao => promocao.id !== id));
            })
            .catch((error) => {
                console.error("Erro ao deletar a promoção:", error);
            });

        buscarPromocoes();
    };

    return (
        <Lista>
            <h1>Promoções</h1>
            {promocoes.map((promocao) => (
                <Promocao
                    key={promocao.id}
                    $id={promocao.id}
                    $name={promocao.name}
                    $value={promocao.value}
                    $newValue={promocao.newValue}
                    $regra={promocao.regra}
                    deletePromotion={deletePromotion}
                />
            ))}
        </Lista>
    );
};

export const ClientesLista = ({ newCliente }) => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        searchClient();
    }, [newCliente]);

    const searchClient = () => {
        fetch("http://localhost:8080/clients")
            .then((response) => response.json())
            .then((data) => {
                setClientes(data);
                console.log("Sucesso ao buscar os clientes");
            })
            .catch((error) => console.error("Erro ao buscar os clientes:", error));
    }

    const deleteClient = ($id) => {
        fetch(`http://localhost:8080/clients/${$id}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (!response.ok) {
                    console.log($id);
                    throw new Error("Erro ao deletar cliente");
                }
                console.log("Cliente deletado com sucesso");

                setClientes(clientes.filter(cliente => cliente.id !== $id));
            })
            .catch((error) => {
                console.error("Erro ao deletar o cliente:", error);
            });

        searchClient();
    };

    const infoClient = ($id) => {
        fetch(`http://localhost:8080/clients/${$id}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) =>
                console.log("Cliente encontrado com sucesso", data)
            )
            .catch((error) => console.error("Erro ao buscar cliente:", error));
    }

    return (
        <Lista>
            <h1>Clientes</h1>
            {clientes.map((cliente) => (
                <Cliente
                    key={cliente.id}
                    $id={cliente.id}
                    $name={cliente.name}
                    $phone={cliente.phone}
                    deleteClient={deleteClient}
                    infoClient={infoClient}
                />
            ))}
        </Lista>
    );
};
