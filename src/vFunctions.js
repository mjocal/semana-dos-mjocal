import React from "react";

export const VersionFunctions = () => {
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");

  React.useEffect(() => {
    console.log("seria componentDidMount");
    setTimeout(() => {
      setNombre("Majo");
      setApellido("Calderon");
    }, 5000);
  }, []);

  console.log("seria el render");
  return <div> Nombre: {(nombre, apellido)}</div>;
};
