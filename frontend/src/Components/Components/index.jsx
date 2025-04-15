import styled from 'styled-components'

const Txt = styled.h1`

font-size: ${({ $tamanho }) => $tamanho}rem;
margin: 0;
padding:0;
text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);

`

export const Texto = ({ children, tamanho }) => {

    let tamanhoTexto = 1;

    switch (tamanho) {

        case "1":
            tamanhoTexto = 1.8;
            break
        case "2":
            tamanhoTexto = 3;
            break

    }

    return (
        <Txt $tamanho={tamanhoTexto}>
            {children}
        </Txt>
    )

}

const Interagivel = styled.div`

cursor: pointer;

scale: 0.95;

&:hover {
    scale: 1;
}

&:active {
    scale: 0.95;
    opacity: 0.7;
}

`

export const Clickavel = ({ children, Funcao }) => {


    return (
        <Interagivel onClick={Funcao}>
            {children}
        </Interagivel>
    )
}

export const ContainerNormal = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 33%;
    
`

export const ContainerColorido = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff7f7;
    height: fit-content;
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

`

const Title = styled.div`

    font-size: ${({ $tamanho }) => $tamanho}rem;
    margin: 0;
    padding:0;
    font-weight: bold;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);

`

export const Titulo = ({ children, tamanho }) => {

    let tamanhoTexto = 1;

    switch (tamanho) {

        case "1":
            tamanhoTexto = 2;
            break
        case "2":
            tamanhoTexto = 4;
            break

    }

    return (
        <Title $tamanho={tamanhoTexto}>
            {children.toUpperCase()}
        </Title>
    )
}

