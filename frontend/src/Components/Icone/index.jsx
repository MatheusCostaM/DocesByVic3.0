import styled from 'styled-components';
import { Clickavel } from '../Components';

const Icone = styled.div`

width: 10vh;
height: 10vh;
border-radius: 50%;
background-color: white;
z-index: 2;
position: fixed;
top: 85%;
right: 5%;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
display: ${({ $carrinho }) => ($carrinho.length !== 0 ? "flex" : "none")};


div{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

img{
    width: 7vh;
    height: 7vh;
}

.tamanhoCarrinho{
    height: 3vh;
    width: 3vh;
    background-color: red;
    border-radius: 50%;
    position: absolute;
}

`

export default ({ Abrir, carrinho }) => {


    return (
        <Icone $carrinho={carrinho}>

            <Clickavel Funcao={Abrir}><strong><img src='/cart.svg' /></strong></Clickavel>
            <div className='tamanhoCarrinho'>{carrinho.length}</div>
        </Icone>
    )
}