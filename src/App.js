import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";

import ListaDeNotas from "./components/ListaDeNotas";

import "./assets/App.css";

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
