import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Submit } from '../ComponentsDB';

const Container = styled.form`
  width: 20%;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #8b3e00;
    text-align: center;
    align-items: center;
    background: white;
    padding: 4vh;
    border-radius: 20px;
`;

export const NovaPromocao = ({ atualizaPromotion, adicionar }) => {
    const [nomePromocao, setNomePromocao] = useState('');
    const [valorAntes, setValorAntes] = useState('');
    const [valorDepois, setValorDepois] = useState('');
    const [quantMin, setQuantMin] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const novaPromocao = {
            name: nomePromocao,
            value: valorAntes,
            newValue: valorDepois,
            regra: quantMin
        };

        fetch("http://localhost:8080/promotions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novaPromocao)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao cadastrar Promoção");
                }
                return response.json();
            })
            .then(data => {
                console.log("Promoção cadastrada com sucesso:", data);
                setNomePromocao('');
                setValorAntes('');
                setValorDepois('');
                setQuantMin('');
                adicionar();
            })
            .catch(error => {
                console.error("Erro ao cadastrar o Promoção:", error);
            });

        atualizaPromotion();

    };

    return (
        <Container onSubmit={handleSubmit}>
            <h3>Adicionar Promoção</h3>
            <Input
                $name="Nome da Promoção"
                value={nomePromocao}
                onChange={(e) => setNomePromocao(e.target.value)}
            />
            <Input
                $name="Valor do Produto Antes da Promoção"
                value={valorAntes}
                type="number"
                onChange={(e) => setValorAntes(e.target.value)}
            />
            <Input
                $name="Valor do Produto Depois da Promoção"
                value={valorDepois}
                type="number"
                onChange={(e) => setValorDepois(e.target.value)}
            />
            <Input
                $name="Mínimo de Produtos para a Promoção"
                value={quantMin}
                type="number"
                onChange={(e) => setQuantMin(e.target.value)}
            />
            <Submit />
        </Container>
    );
};

export const NovoCliente = ({ atualizaClient, adicionar }) => {
    const [nomeCliente, setNomeCliente] = useState('');
    const [telefoneCliente, setTelefoneCliente] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const novoCliente = {
            name: nomeCliente,
            phone: telefoneCliente
        };

        fetch("http://localhost:8080/clients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoCliente)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao cadastrar cliente");
                }
                return response.json();
            })
            .then(data => {
                console.log("Cliente cadastrado com sucesso:", data);
                setNomeCliente('');
                setTelefoneCliente('');
                adicionar();
            })
            .catch(error => {
                console.error("Erro ao cadastrar o cliente:", error);
            });

        atualizaClient();
    };

    return (
        <Container onSubmit={handleSubmit}>
            <h3>Adicionar Cliente</h3>
            <Input
                $name="Nome Cliente"
                value={nomeCliente}
                onChange={(e) => setNomeCliente(e.target.value)}
            />
            <Input
                $name="Telefone Cliente"
                value={telefoneCliente}
                onChange={(e) => setTelefoneCliente(e.target.value)}
            />
            <Submit />
        </Container>
    );
};


export const NovoProduto = ({ atualizaProduct, adicionar }) => {
    const [tipoProduto, setTipoProduto] = useState('');
    const [saborProduto, setSaborProduto] = useState('');
    const [valorProduto, setValorProduto] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const novoProduto = {
            tipe: tipoProduto,
            sabor: saborProduto,
            value: valorProduto
        };

        fetch("http://localhost:8080/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoProduto)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao cadastrar Produto");
                }
                return response.json();
            })
            .then(data => {
                console.log("Produto cadastrado com sucesso:", data);
                setTipoProduto('');
                setSaborProduto('');
                setValorProduto('');
                adicionar();
            })
            .catch(error => {
                console.error("Erro ao cadastrar o produto:", error);
            });

        atualizaProduct();
    };

    return (
        <Container onSubmit={handleSubmit}>
            <h3>Adicionar Produto</h3>
            <Input
                $name="Tipo do Produto"
                value={tipoProduto}
                onChange={(e) => setTipoProduto(e.target.value)}
            />
            <Input
                $name="Sabor do Produto"
                value={saborProduto}
                onChange={(e) => setSaborProduto(e.target.value)}
            />
            <Input
                $name="Valor do Produto"
                value={valorProduto}
                type="number"
                onChange={(e) => setValorProduto(e.target.value)}
            />
            <Submit />
        </Container>
    );
};

