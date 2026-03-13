import axios from "axios";

async function BuscarProduto(id) {
  const response = await axios.get(
    `https://localhost:7250/produto/buscar-produtos/${id}`,
  );

  return response.data;
}

export default BuscarProduto;
