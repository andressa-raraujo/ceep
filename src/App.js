import React, { Component } from "react";
import FormularioCadastro from "./components/formularioCadastro";

import ListaDeNotas from "./components/listaDeNotas";

class App extends Component {
  render() {
    return (
      <div>
        <FormularioCadastro />
        <ListaDeNotas />
      </div>
    );
  }
}

export default App;
