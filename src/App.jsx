import { useState } from "react"
import "./App.css"
import DadosDeEnvio from "./controller/AdicionarProduto";

function App() {

  const [nomeProduto, setNomeProduto] = useState();
  const [data, setData] = useState();
  const [descricao, setDescricao] = useState();

  function AlterarNomeProduto(e){
    setNomeProduto(e.target.value)
  }

  function AlterarData(e){
    setData(e.target.value)
  }

  function AlterarDescricao(e){
    setDescricao(e.target.value)
  }

  function AdicionarProduto(e){
    e.preventDefault();

    console.log(DadosDeEnvio)
  }

  return (
    <>
      <div>
        <form action="/adicionar-produto" onSubmit={AdicionarProduto}>
          <input type="text" placeholder="Nome Produto" value={nomeProduto} onChange={AlterarNomeProduto}></input>
          <input type="text" placeholder="dd/mm/aaaa" value={data} onChange={AlterarData}></input>
          <textarea placeholder="Descrição" value={descricao} onChange={AlterarDescricao}></textarea>
          <button type="submit">Adicionar Produto</button>
        </form>
        <form action="/alterar-produto">
          <input type="text" placeholder="Nome Produto"></input>
          <input type="text" placeholder="dd/mm/aaaa"></input>
          <textarea placeholder="Descrição"></textarea>
          <button type="submit">Alterar Produto</button>
        </form>
        <button>Excluir Produto</button>
        <button>Buscar Produto</button>
      </div>
    </>
  )
}

export default App
