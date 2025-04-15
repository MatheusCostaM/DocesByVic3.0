import React, { useState, useEffect } from 'react'
import Linha from './Components/Linha'
import Carrinho from './Components/Carrinho'
import Navbar from './Components/Navbar'
import Icone from './Components/Icone'


export default function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [openCarrinho, setOpenCarrinho] = useState(true);
  const [total, setTotal] = useState(0)
  const [mensagem, setMensagem] = useState("")

  useEffect(() => {
    let newTotal = 0;

    for (let i = 0; i < carrinho.length; i++) {
      newTotal += (carrinho[i].price * carrinho[i].quantity);
    }

    setTotal(newTotal);

  }, [carrinho]);

  const scroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const Abrir = () => {

    let newOpenCarrinho = openCarrinho;

    if (newOpenCarrinho == false) {
      newOpenCarrinho = true;
    } else {
      newOpenCarrinho = false;
    }

    setOpenCarrinho(newOpenCarrinho);

  }

  const Adicionar = (obj) => {
    let newCarrinho = [...carrinho];
    let adicionado = false;

    for (let i = 0; i < carrinho.length; i++) {
      if (newCarrinho[i].name == obj.name) {
        newCarrinho[i].quantity += obj.quantity;
        adicionado = true;
      }
    }

    if (!adicionado) {
      newCarrinho.push(obj);
    }

    setCarrinho(newCarrinho);

  }

  const Deletar = (name, quantidade) => {

    let newCarrinho = [...carrinho]

    for (let i = 0; i < carrinho.length; i++) {
      if (name == carrinho[i].name && quantidade == carrinho[i].quantity) {
        newCarrinho.splice(i, 1);

        break
      }

    }

    if (name == "tudo") {
      newCarrinho = [];
    }
    setCarrinho(newCarrinho);
  }

  const LinkarPedido = () => {

    let newMensage = "Quero fazer um pedido."
    let newText = ""

    if (carrinho.length > 0) {

      newMensage = ""

      newMensage += "Meu Pedido \n"

      for (let i = 0; i < carrinho.length; i++) {

        newText = `${carrinho[i].quantity} - ${carrinho[i].name}: R$${carrinho[i].price},00`

        newMensage += newText + "\n";


      }

      newMensage += `Valor Total: R$${total},00`

    }

    newMensage = `https://wa.me/5511987313427?text=${encodeURIComponent(newMensage)}`

    if (total == 0 || total >= 20) {
      setMensagem(newMensage)
    }
    else {
      alert("Valor mínimo de R$20,00 por pedido.")
      setMensagem("")
    }

  }

  return (
    <>
      <Navbar Abrir={Abrir} scroll={scroll} />
      <Carrinho openCarrinho={openCarrinho} Abrir={Abrir} carrinho={carrinho} total={total} Deletar={Deletar} LinkarPedido={LinkarPedido} mensagem={mensagem} />
      <Linha Adicionar={Adicionar} />
      <Icone Abrir={Abrir} carrinho={carrinho}></Icone>
    </>


  )
}
