import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminLogin from './pages/Admin'
import HomePage from './pages/Home'

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

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then(response => response.json())
      .then(data => console.log("Dados recebidos do backend:", data))
      .catch(error => console.error("Erro ao buscar os produtos:", error));
  }, []);

  return (
    <Routes>
      <Route path="/" element={
        <HomePage
          carrinho={carrinho}
          setCarrinho={setCarrinho}
          openCarrinho={openCarrinho}
          setOpenCarrinho={setOpenCarrinho}
          total={total}
          setTotal={setTotal}
          mensagem={mensagem}
          setMensagem={setMensagem}
        />
      } />
      <Route path="/adm" element={<AdminLogin />} />
    </Routes>
  )
}
