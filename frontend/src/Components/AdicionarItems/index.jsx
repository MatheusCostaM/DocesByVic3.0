import React, { useState } from 'react';
import styled from 'styled-components';
import { Clickavel } from '../Components';
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

    h3{
        padding:0;
        margin: 0;
        
    }

    div{
        width:100%;
    }
`
    ;


const Sair = styled.div`

display: flex;
width: 100%;
justify-content: end;
color: red;

div{
    max-width: 3vh;
}


`;

export const NovaPromocao = ({ atualizaPromotion, adicionar, data }) => {
    const [nomePromocao, setNomePromocao] = useState(data ? data.nome : "");
    const [valorAntes, setValorAntes] = useState(data ? data.valor : "");
    const [valorDepois, setValorDepois] = useState(data ? data.valorNovo : "");
    const [quantMin, setQuantMin] = useState(data ? data.regra : "");

    const handleSubmit = (e) => {
        e.preventDefault();

        const novaPromocao = {
            name: nomePromocao,
            value: valorAntes,
            newValue: valorDepois,
            regra: quantMin
        };

        const url = data
            ? `http://localhost:8080/promotions/${data.id}`
            : "http://localhost:8080/promotions";

        const method = data ? "PUT" : "POST";

        fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novaPromocao)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao atualizar a promoção");
                }
                return response.json();
            })
            .then(data => {
                console.log("Cliente atualizado com a promoção:", data);
                setNomePromocao('');
                setValorAntes('');
                setValorDepois('');
                setQuantMin('');
                adicionar();
            })
            .catch(error => {
                console.error("Erro ao atualizar o promoção:", error);
            });

        atualizaPromotion();

    };

    return (
        <Container onSubmit={handleSubmit}>
            <div>
                <Sair><Clickavel><h3 onClick={adicionar}>X</h3></Clickavel></Sair>
                <h3>Adicionar Promoção</h3>
            </div>
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

export const NovoCliente = ({ atualizaClient, adicionar, data }) => {
    const [nomeCliente, setNomeCliente] = useState(data ? data.nome : "");
    const [telefoneCliente, setTelefoneCliente] = useState(data ? data.telefone : "");

    const handleSubmit = (e) => {
        e.preventDefault();

        const novoCliente = {
            name: nomeCliente,
            phone: telefoneCliente
        };

        const url = data
            ? `http://localhost:8080/clients/${data.id}`
            : "http://localhost:8080/clients";

        const method = data ? "PUT" : "POST";

        fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoCliente)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao atualizar cliente");
                }
                return response.json();
            })
            .then(data => {
                console.log("Cliente atualizado com sucesso:", data);
                setNomeCliente('');
                setTelefoneCliente('');
                adicionar();
            })
            .catch(error => {
                console.error("Erro ao atualizar o cliente:", error);
            });


        atualizaClient();
    };

    return (
        <Container onSubmit={handleSubmit}>

            <div>
                <Sair><Clickavel><h3 onClick={adicionar}>X</h3></Clickavel></Sair>
                <h3>Adicionar Cliente</h3>
            </div>

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


export const NovoProduto = ({ atualizaProduct, adicionar, data }) => {
    const [tipoProduto, setTipoProduto] = useState(data ? data.tipo : '');
    const [saborProduto, setSaborProduto] = useState(data ? data.sabor : '');
    const [valorProduto, setValorProduto] = useState(data ? data.valor : '');

    const handleSubmit = (e) => {
        e.preventDefault();

        const novoProduto = {
            tipe: tipoProduto,
            sabor: saborProduto,
            value: valorProduto,
        };

        const url = data
            ? `http://localhost:8080/products/${data.id}`
            : "http://localhost:8080/products";

        const method = data ? "PUT" : "POST";

        fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoProduto)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(data ? "Erro ao atualizar Produto" : "Erro ao cadastrar Produto");
                }
                return response.json();
            })
            .then(data => {
                console.log(data ? "Produto atualizado com sucesso:" : "Produto cadastrado com sucesso:", data);
                setTipoProduto('');
                setSaborProduto('');
                setValorProduto('');
                adicionar();
            })
            .catch(error => {
                console.error("Erro ao salvar o produto:", error);
            });

        atualizaProduct();
    };

    return (
        <Container onSubmit={handleSubmit}>
            <div>
                <Sair><Clickavel><h3 onClick={adicionar}>X</h3></Clickavel></Sair>
                <h3>{data ? "Editar Produto" : "Adicionar Produto"}</h3>
            </div>
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

