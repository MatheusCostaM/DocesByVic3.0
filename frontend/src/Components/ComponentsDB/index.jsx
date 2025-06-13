import styled from 'styled-components';

const CompInput = styled.input`
  background: none;
  width: 100%;
  color: #8b3e00;
  border-radius: 10px;
  padding: 8px;
  border: 1px solid #8b3e00;
  font-size: 1rem;

  &::placeholder {
    color: #8b3e00;
    opacity: 0.6;
    font-size: 0.9rem;
  }
`;

export const Input = ({ $name, value, onChange }) => {
    return (
        <CompInput
            placeholder={$name}
            value={value}
            onChange={onChange}
        />
    );
};

const CompButton = styled.button`
  background-color: #ff5aa4;
  padding: 1vh, 2vh;
`;

export const Submit = () => {
    return <CompButton type='submit'>Enviar</CompButton>;
};

const ContainerItens = styled.div`
  background: #ffbcda;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 2vh;
  margin: 2vh;
  width: 90%;

  div{
    display: flex;
}
`;

const MiniMenu = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

button{
    background-color: white;
    color: #8b3e00 !important;
}


`

const Valor = styled.div`
background-color: #ff5aa4;
border-radius: 10px;
padding: 1vh 3vh;
margin: 1vh;

`

export const Cliente = ({ $name, $phone, $id, deleteClient, infoClient, editarClient }) => {

    return (
        <ContainerItens>
            <div>
                <h3>Cliente: </h3>
                <Valor><h3>{$name}</h3></Valor>
            </div>
            <div>
                <h3>Telefone: </h3>
                <Valor><h3>{$phone}</h3></Valor>
            </div>
            <MiniMenu>
                <button onClick={() => deleteClient($id)}>Excluir</button>
                <button onClick={() => infoClient($id)}>Info</button>
                <button onClick={() => editarClient($id)}>Editar</button>
            </MiniMenu>
        </ContainerItens>
    )
}

export const Produto = ({ $type, $sabor, $value, $id, deleteProduct, editarProduct }) => {

    return (
        <ContainerItens>
            <div>
                <h3>Produto: </h3>
                <Valor><h3>{$type} - {$sabor}</h3></Valor>
            </div>
            <div>
                <h3>Valor: </h3>
                <Valor><h3>R$ {$value},00</h3></Valor>
            </div>
            <MiniMenu>
                <button onClick={() => deleteProduct($id)}>Excluir</button>
                <button onClick={() => editarProduct($id)}>Editar</button>
            </MiniMenu>
        </ContainerItens>
    )
}

export const Promocao = ({ $name, $value, $newValue, $regra, $id, deletePromotion, editarPromotion }) => {

    return (
        <ContainerItens>
            <div>
                <h3>Promoção: </h3>
                <Valor><h3>{$name}</h3></Valor>
            </div>
            <div>
                <h3>Valor: </h3>
                <Valor><h3>{$value}</h3></Valor>
            </div>
            <div>
                <h3>Novo Valor: </h3>
                <Valor><h3>{$newValue}</h3></Valor>
            </div>
            <div>
                <h3>Quantidade Mínima: </h3>
                <Valor><h3>{$regra}</h3></Valor>
            </div>
            <MiniMenu>
                <button onClick={() => deletePromotion($id)}>Excluir</button>
                <button onClick={() => editarPromotion($id)}>Editar</button>
            </MiniMenu>
        </ContainerItens>
    )
}

export const Sell = ({ $produto, $quantidade }) => {

    return (
        <ContainerItens>
            <h3>{$produto}</h3>
            <h3>{$quantidade}</h3>
        </ContainerItens>
    )
}

export const CompleteSell = ({ $cliente, $data, $listSell }) => {
    return (
        <ContainerItens>
            <h3>{$data} - {$cliente}</h3>
            {$listSell.map((sell) => (
                <Sell $produto={sell.product} $quantidade={sell.quantity} />
            ))}
        </ContainerItens>
    )
}