import Product from '../Product';
import lista from '../Dados/DBProducts';
import Lines from '../Dados/DBLines';
import styled from 'styled-components';
import Imagens, { auto } from '../Dados/DBImages';
import { Titulo, Texto } from '../Components'

const Line = styled.div`


display: flex;
flex-direction: column;
align-items: center;
width: 100vw;

.sobre{
    width: 50vw;

    img {
        width: 40%;
    }

    .redes{

        display: flex;
        justify-content: space-around;
        width: 30%;
        margin: 2vh;



        a {
            width: 20%;
            min-width: 5vh;
            
            img{
                width:100%;
            }
        }
    }

    @media only screen and (max-width: 600px) {
    
        width: 100%;
        
    }
}



@keyframes appear {
    from{
        opacity: 0;
        transform: translateY(600px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }

`;

const ContainersProject = styled.div`
    width: 30vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #8b3e00;
    min-width: 50vh;

    img {
        width: 80%;
    }

`

const Tela = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60vw;
    height: 100vh;
    flex-wrap: wrap;

    @media only screen and (max-width: 600px) {
        
        width: 100vw;
        height: 110vh;
    }
    
    animation: appear linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
    
`

export default ({ Adicionar }) => {

    return (
        <Line>
            <Tela id="sobre">
                <ContainersProject className='sobre'>
                    <img src='/logo.png' />
                    <Texto tamanho="1">Doces feitos com amor e carinho</Texto>
                    <div className='redes'>
                        <a href="https://wa.me/5511987313427" target='_blank'><img src='/what.svg' /></a>
                        <a href="https://www.instagram.com/docesby_vic?igsh=MXZwMDk4bnoyYnMycw==" target='_blank'><img src='/insta.svg' /></a>
                    </div>
                </ContainersProject>
            </Tela>
            {Lines.map((line, index) => {
                let linelist = [];

                for (let i = 0; i < lista.length; i++) {
                    if (lista[i].type === line) {
                        linelist.push(lista[i]);
                    }
                }

                let imagem = auto;
                let nome = 'auto';

                for (let i = 0; i < Imagens.length; i++) {

                    if (Imagens[i].type == line) {
                        imagem = Imagens[i].img;
                        nome = Imagens[i].type;
                    }
                }

                return (

                    <Tela key={index} id={index}>

                        <ContainersProject >
                            <Titulo tamanho="2">{nome}</Titulo>
                            <img src={imagem} />
                        </ContainersProject >
                        <Product lista={linelist} Adicionar={Adicionar} />

                    </Tela>

                );
            })}
        </Line>
    )
}