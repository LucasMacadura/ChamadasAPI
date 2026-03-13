import { useState } from "react";
import "./App.css";
import AdicionarProduto from "./service/AdicionarProduto";
import AlterarProduto from "./service/AlterarProduto";
import BuscarProduto from "./service/BuscarProduto";
import ExcluirProduto from "./service/ExcluirProduto";

function App() {
  const [nomeProduto, setNomeProduto] = useState();
  const [data, setData] = useState();
  const [descricao, setDescricao] = useState();
  const [operacao, setOperacao] = useState();

  function AlterarNomeProduto(e) {
    setNomeProduto(e.target.value);
  }

  function AlterarData(e) {
    setData(e.target.value);
  }

  function AlterarDescricao(e) {
    setDescricao(e.target.value);
  }

  function OperacaoAdicionarProduto() {
    setOperacao(1);
  }

  function OperacaoAlterarProduto() {
    setOperacao(2);
  }

  function SalvarProduto(e) {
    e.preventDefault();

    if (operacao == 1) {
      AdicionarProduto(nomeProduto, data, descricao);
    } else {
      AlterarProduto(nomeProduto, data, descricao);
    }
  }

  function OperacaoExcluirProduto(e) {
    alert("excluir");
  }

  async function OperacaoBuscarProduto(e) {
    e.preventDefault();

    const produtos = await BuscarProduto();

    console.log(produtos);
    setNomeProduto(produto.nome);
    setData(produto.data);
    setDescricao(produto.descricao);
  }

  return (
    <>
      <div>
        <button onClick={OperacaoAdicionarProduto}>Adicionar Produto</button>
        <button onClick={OperacaoAlterarProduto}>Alterar Produto</button>
        <form onSubmit={SalvarProduto}>
          <input
            type="text"
            placeholder="Nome Produto"
            value={nomeProduto}
            onChange={AlterarNomeProduto}
          ></input>
          <input
            type="text"
            placeholder="dd/mm/aaaa"
            value={data}
            onChange={AlterarData}
          ></input>
          <textarea
            placeholder="Descrição"
            value={descricao}
            onChange={AlterarDescricao}
          ></textarea>
          <button type="submit">Salvar</button>
        </form>
        <button onClick={OperacaoExcluirProduto}>Excluir Produto</button>
        <button onClick={OperacaoBuscarProduto}>Buscar Produto</button>
      </div>
    </>
  );
}

export default App;
