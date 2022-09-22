import React, { Component } from "react";

export default class VersionClasses extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      nombre: "",
      apellido: "",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({ nombre: "Majo", apellido: "Calderon" });
    }, 5000);
  }

  render() {
    console.log("render");
    return <div>Nombre: {this.state.nombre}</div>;
  }
}
