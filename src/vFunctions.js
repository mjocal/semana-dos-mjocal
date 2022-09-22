import React from "react";
// import { getTodos } from "./api";

export const VersionFunctions = () => {
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");

  async function getTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    console.log("data", data);
  }

  // el hook de useEffect no puede ser asincrono
  React.useEffect(() => {
    getTodos();
    console.log("seria componentDidMount");
    setTimeout(() => {
      setNombre("Majo");
      setApellido("Calderon");
    }, 5000);
  }, []);

  console.log("seria el render");
  return <div> Nombre: {nombre + " " + apellido}</div>;
};
