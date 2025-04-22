import styled from 'styled-components';

const CompInput = styled.input`
  background-color: white;
  width: 100%;
  color: black;
`;

export const Input = ({ $name, value, onChange }) => {
    return (
        <>
            <label>{$name}</label>
            <CompInput value={value} onChange={onChange} />
        </>
    );
};

const CompButton = styled.button`
  background-color: red;
  width: 20vw;
  height: 4vh;
`;

export const Submit = () => {
    return <CompButton type='submit'>Enviar</CompButton>;
};

const ContainerItens = styled.div`
  background: pink;
  color: white;
  display: flex;
  justify-content: space-around;
`;

export const Cliente = ({ $name, $phone, $id, deleteClient, infoClient }) => {

    return (
        <ContainerItens>
            <h3>{$name}</h3>
            <h3>{$phone}</h3>
            <h3 onClick={() => deleteClient($id)}>X</h3>
            <h3 onClick={() => infoClient($id)}>+</h3>
        </ContainerItens>
    )
}

export const Produto = ({ $type, $sabor, $value, $id, deleteProduct }) => {

    return (
        <ContainerItens>
            <h3>{$type} - {$sabor}</h3>
            <h3>{$value}</h3>
            <h3 onClick={() => deleteProduct($id)}>X</h3>
        </ContainerItens>
    )
}

export const Promocao = ({ $name, $value, $newValue, $regra, $id, deletePromotion }) => {

    return (
        <ContainerItens>
            <h3>{$name}</h3>
            <h3>{$value}</h3>
            <h3>{$newValue}</h3>
            <h3>{$regra}</h3>
            <h3 onClick={() => deletePromotion($id)}>X</h3>
        </ContainerItens>
    )
}