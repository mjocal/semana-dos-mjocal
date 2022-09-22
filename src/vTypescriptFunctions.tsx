import React from "react";

export const VersionFunctionsTsx: React.FC = () => {
  // los useState casi siempre son generic, pero pueden ser tipados
  const [nombre, setNombre] = React.useState<string | undefined>(undefined);
  const [apellido, setApellido] = React.useState<string | undefined>("");

  React.useEffect(() => {
    console.log("seria componentDidMount fx tsx");
    setTimeout(() => {
      setNombre("Majo");
      setApellido("Calderon");
    }, 5000);
  }, []);

  console.log("seria el render fx tsx");
  return <div> Nombre: {nombre + " " + apellido}</div>;
};
