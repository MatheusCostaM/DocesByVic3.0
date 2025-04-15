import React, { useState } from 'react'
import styled from 'styled-components'
import { Texto, ContainerColorido, ContainerNormal, Titulo } from '../Components'

const Product = styled.div`

width: 30vw;
min-width: 50vh;
height: 55vh;
display: flex;
color: #8b3e00;
flex-direction: column;
text-align: center;

.sabor{
    width: 100%;
}

`;

const ContainerProduct = styled.div`

background-color: white;
height: fit-content;
border-radius: 20px;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
display: flex;
flex-direction: column;
justify-content: space-around;

div{
    margin: 2vh;
}

`


export default ({ lista, Adicionar }) => {

    const [quantidade, setQuantidade] = useState(1)
    const [sabor, setSabor] = useState(1)

    function Option(tipo, contador) {

        let newValue
        let func
        let limite = 100

        switch (contador) {
            case 'sabor':
                newValue = sabor
                func = setSabor
                limite = lista.length
                break
            case 'quantidade':
                newValue = quantidade
                func = setQuantidade
                break
            default:
                console.log('erro no tipo de dado')
                break
        }

        switch (tipo) {
            case 'menos':
                if (newValue > 1) {
                    newValue -= 1
                }
                break
            case 'mais':
                if (newValue < limite) {
                    newValue += 1
                }

                break
            default:
                console.log('erro no tipo de alteração da quantidade')
                break
        }

        func(newValue)

        if (func == setSabor) {
            setQuantidade(1);
        }

    }

    let obj = {
        name: lista[sabor - 1].name,
        price: lista[sabor - 1].price,
        quantity: quantidade
    }


    return (
        <Product>
            <Titulo tamanho='1'>Sabor</Titulo>
            <ContainerNormal>

                <ContainerColorido className='sabor'>
                    <button onClick={() => { Option('menos', 'sabor') }}><Texto tamanho="1">&larr;</Texto></button>
                    <Texto tamanho="1">{lista[sabor - 1].name}</Texto>
                    <button onClick={() => { Option('mais', 'sabor') }}><Texto tamanho="1">&rarr;</Texto></button>
                </ContainerColorido>
            </ContainerNormal>
            <ContainerProduct><ContainerNormal>
                <Texto tamanho="2">R${lista[sabor - 1].price},00</Texto>
            </ContainerNormal>
                <ContainerNormal>
                    <ContainerColorido>
                        <button onClick={() => { Option('menos', 'quantidade') }}><Texto>-</Texto></button>
                        <Texto>{quantidade}</Texto>
                        <button onClick={() => { Option('mais', 'quantidade') }}><Texto>+</Texto></button>
                    </ContainerColorido>
                    <button onClick={() => { Adicionar(obj) }}><Texto tamanho="1">Adicionar</Texto></button>
                </ContainerNormal>
            </ContainerProduct>
        </Product>
    )
}