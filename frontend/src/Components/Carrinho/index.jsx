import React from 'react'
import styled from 'styled-components'
import { Clickavel, Texto } from '../Components';

const Carrinho = styled.div`

width: 70vw;
height: 80vh;
background-color: white;
top: 55%;
left: 50%;
transform: translate(-50%, -50%);
position: fixed;
z-index: 1;
display: ${({ $openCarrinho }) => ($openCarrinho ? "none" : "flex")};
flex-direction: column;
justify-content: space-around;
align-items: center;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

.titulotable{
    display: flex;
    width: 90%;
    height: 13%;
    align-items: center;
    justify-content: space-between;
    color: #8b3e00;
    
}


div{
    margin: 1vh;
}



.divtable{
    color: white;
    width: 80%;
    height: 80%;
    overflow-y: auto;
    
    
    table {


        width: 100%;

        .divlixo{
            display: flex;
            max-height: 6.5vh;
            align-items: center;
            justify-content: center;

            margin: 0;
                padding: 0;
            
        }

        th {

            img {
                filter: invert(10%) sepia(60%) saturate(500%) hue-rotate(10deg);
            }
        }

        img {
            max-height: 4vh;
            filter: invert(100%)
        }
    }
}

th {
    color: #8b3e00;
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    background-color: #fff7f7;
}

td {
    
    border-radius: 10px;
    background-color: #8b3e00;
    text-align: center;
    
}

tr {
    max-height: 3vh;
}

img{
    max-height: 10vh;
}

section{
    display: flex;
    width: 80%;
    height: 15%;
    justify-content: space-around;
    align-items: center;
}


a {
    text-decoration: none;
    color: inherit;
  
  }

  ::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #fff7f7;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: #8b3e00;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #b55e1e;
}

@media only screen and (max-width: 600px) {
        
    width: 100vw;
    height: 85vh;

    table{

        p{
            font-size: 0.7rem !important;
            margin:0;
        }
        img{
            width: 2vh;
        }
    }
    .titulotable{
        
        width: 100%;
        
        img{
            max-height: 8vh;
        }
        
        
    }
    
}

`;

export default ({ carrinho, openCarrinho, Abrir, Deletar, total, LinkarPedido, mensagem }) => {

    return (
        <Carrinho $openCarrinho={openCarrinho}>
            <div className='titulotable'>
                <Clickavel Funcao={Abrir}><img src='/cart.svg' /></Clickavel>
                <Texto tamanho="1">Seu Pedido</Texto>
                <Clickavel className='deletar' Funcao={Abrir}><Texto tamanho='2'>X</Texto></Clickavel>
            </div>
            <div className='divtable'>
                <table>
                    <colgroup>
                        <col style={{ width: "25%" }} />
                        <col style={{ width: "50%" }} />
                        <col style={{ width: "15%" }} />
                        <col style={{ width: "10%" }} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th><p>QUANTIDADE</p></th>
                            <th><p>NOME</p></th>
                            <th><p>PREÇO</p></th>
                            <th><Clickavel Funcao={() => { Deletar("tudo") }}><div className='divlixo'><img src="/lixo.png" /></div></Clickavel></th>
                        </tr>
                    </thead>
                    <tbody>
                        {carrinho.map((item, index) => (
                            <tr key={index}>
                                <td><p>{item.quantity}</p></td>
                                <td><p>{item.name}</p></td>
                                <td><p>R${item.price},00</p></td>
                                <td><div className='divlixo'><Clickavel Funcao={() => { Deletar(item.name, item.quantity) }}><Texto><img src="/lixo.png" /></Texto></Clickavel></div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <section>
                <button><Texto>R${total},00</Texto></button>
                <Clickavel Funcao={LinkarPedido}>
                    <button>
                        <a
                            href={mensagem}
                            target={mensagem !== "" ? "_blank" : ""}
                            rel="noopener noreferrer"
                            onClick={(event) => {
                                if (mensagem == "") {
                                    event.preventDefault();
                                }
                            }}
                        >
                            <Texto>Finalizar Pedido</Texto>
                        </a>
                    </button>
                </Clickavel>
            </section>

        </Carrinho >

    )
}