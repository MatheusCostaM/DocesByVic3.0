import React, { useState, useEffect } from 'react'
import { NovaPromocao, NovoCliente, NovoProduto } from '../Components/AdicionarItems'
import { ProdutosLista, PromocoesLista, ClientesLista } from '../Components/Listas'
import styled from 'styled-components'
import { NavbarAdm } from '../Components/Navbar'
import { Titulo } from '../Components/Components'
import { motion, AnimatePresence } from 'framer-motion';
import Animation from '../Components/Animation'


const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Painel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 10vh; 
  color: #8b3e00;
  margin: 5vh;

`;




export default function AdminLogin() {

    const [newCliente, setNewCliente] = useState(false);
    const [newProduct, setNewProduct] = useState(false);
    const [newPromotion, setNewPromotion] = useState(false);
    const [painel, setPainel] = useState("clientes");
    const [adiciona, setAdiciona] = useState(false);

    const atualizaClient = () => {
        setNewCliente(!newCliente);
    }

    const atualizaPromotion = () => {
        setNewPromotion(!newPromotion);
    }

    const atualizaProduct = () => {
        setNewProduct(!newProduct);
    }

    const alteraPainel = (novoPainel) => {

        setPainel(novoPainel);

    }

    const adicionar = () => {
        setAdiciona(!adiciona);
    }



    return (
        <Body>
            <NavbarAdm alteraPainel={alteraPainel} />
            <Painel>
                <Animation animationKey={painel}>
                    <Titulo tamanho='1' >{painel}</Titulo>
                </Animation>

                <Animation animationKey={painel}>
                    {(() => {
                        if (!adiciona) {
                            return <button onClick={adicionar}>Adicionar {painel}</button>;
                        }
                    })()}
                </Animation>
                {adiciona && (
                    <Animation animationKey={painel}>
                        {(() => {
                            switch (painel) {
                                case "clientes":
                                    return <NovoCliente atualizaClient={atualizaClient} adicionar={adicionar} />;
                                case "produtos":
                                    return <NovoProduto atualizaProduct={atualizaProduct} adicionar={adicionar} />;
                                case "promoções":
                                    return <NovaPromocao atualizaPromotion={atualizaPromotion} adicionar={adicionar} />;
                                default:
                                    return null;
                            }
                        })()}
                    </Animation>
                )}
                <Animation animationKey={painel}>
                    {(() => {
                        switch (painel) {
                            case "clientes":
                                return <ClientesLista newCliente={newCliente} />;
                            case "produtos":
                                return <ProdutosLista newProduct={newProduct} />;
                            case "promoções":
                                return <PromocoesLista newPromotion={newPromotion} />;
                            default:
                                return null;
                        }
                    })()}
                </Animation>
            </Painel>

        </Body>


    );
}
