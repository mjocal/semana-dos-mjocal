import React from "react";
// import { getTodos } from "./api";

export const VersionFunctions = () => {
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [list, setList] = React.useState([]);

  async function getTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setList(data);
    // console.log("data functions", data);
    // console.log("id functions", data);
  }

  // el hook de useEffect no puede ser asincrono
  React.useEffect(() => {
    getTodos();
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((res) => res.json())
    //   .then((result) => {
    //     setData(result);
    //   });
    setTimeout(() => {
      // setNombre("Majo");
      // setApellido("Calderon");
      // setList(getTodos);
    }, 5000);
  }, []);

  return (
    <div>
      <p>TO-DO List using Functions</p>
      <ul>
        {list.slice(0, 5).map((item) => (
          <li key={item.id}>
            <p>id: {item.id}</p>
            <p>titulo: {item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
