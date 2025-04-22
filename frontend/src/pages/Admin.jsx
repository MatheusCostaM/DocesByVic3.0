import React, { useState, useEffect } from 'react'
import { NovaPromocao, NovoCliente, NovoProduto } from '../Components/AdicionarItems'
import { ProdutosLista, PromocoesLista, ClientesLista } from '../Components/Listas'
import styled from 'styled-components';


const Body = styled.div`

display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

`;


export default function AdminLogin() {

    const [newCliente, setNewClientes] = useState("");

    const atualizaClient = () => {
        setNewClientes(newCliente + "a");
    }

    return (
        <Body>
            <NovoProduto />
            <ProdutosLista />
            <NovoCliente />
            <ClientesLista />
            <NovaPromocao />
            <PromocoesLista />
        </Body>

    );
}
