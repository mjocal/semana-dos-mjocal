import React, { Component } from "react";

export default class VersionClasses extends Component {
  constructor() {
    super();
    // console.log("constructor");
    this.state = {
      // nombre: "",
      // apellido: "",
      list: [],
    };
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    // this.setState({ list: data });
    // set state de data
    // console.log("data classes", data);
    setTimeout(() => {
      this.setState({ list: data });
      // this.setState({ nombre: "Majo", apellido: "Calderon" });
    }, 5000);
  }

  render() {
    return (
      <div>
        <p>TO-DO List using Classes</p>
        <ul>
          {this.state.list.slice(5, 10).map((item) => (
            <li key={item.id}>
              <p>id: {item.id}</p>
              <p>titulo: {item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
