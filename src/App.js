// import logo from "./logo.svg";
import "./App.css";
import VersionClasses from "./vClasses";
import { VersionFunctions } from "./vFunctions";

function App() {
  // const nombre = "Maria";
  const listaEstudiantes = [
    {
      nombre: "AAA",
      id: 10,
    },
    {
      nombre: "BBB",
      id: 20,
    },
    {
      nombre: "CCC",
      id: 30,
    },
  ];

  return (
    <div>
      <VersionFunctions />
      <VersionClasses />
      {/* <ul>
        {listaEstudiantes.map((estudiante) => (
          <li>
            <p>nombre: {estudiante.nombre}</p>
            <p>id: {estudiante.id}</p>
          </li>
        ))}
      </ul> */}
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
