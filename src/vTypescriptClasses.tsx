import React, { Component } from "react";

// para definir un tipo al estado
interface State {
  nombre: string;
  apellido: string;
}

interface Props {}

// tsx recibe 2 generics: props y estado
export default class VersionClassesTsx extends Component<Props, State> {
  // tsx siempre pide props al constructor, y se debe 'castear'
  constructor(props: Props) {
    super(props);
    console.log("constructor tsx");
    this.state = {
      nombre: "",
      apellido: "",
    };
  }

  componentDidMount() {
    console.log("componentDidMount tsx");
    setTimeout(() => {
      this.setState({ nombre: "Majo", apellido: "Calderon" });
    }, 5000);
  }

  render() {
    console.log("render");
    return <div>Nombre: {this.state.nombre}</div>;
  }
}
