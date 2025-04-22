const BASE_URL = "http://localhost:8080"; // backend rodando localmente

export async function buscarProdutos() {
    const resposta = await fetch(`${BASE_URL}/produtos`);
    const dados = await resposta.json();
    return dados;
}
