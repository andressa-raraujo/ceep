import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/formularioCadastro";

import ListaDeNotas from "./components/ListaDeNotas/listaDeNotas";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="conteudo">
        <FormularioCadastro />
        <ListaDeNotas />
      </div>
    );
  }
}

export default App;
