import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comic from "./components/Comic.js";
import Validador from "./components/Validador";
import Logo from "./components/Logo/index";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState([]);
  let url, vacio;

  let num = useParams().num;
  if (typeof num != "undefined") {
    url = "/" + num + "/info.0.json";
  } else {
    url = "/info.0.json";
    vacio = true;
  }

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setItem(result);
          setIsLoaded(true);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [url]);

  if (error) {
    return (
      <div className="noMatch">
        <q>404</q>
        <p>Pagina no encontrada</p>
        <a href="./">Volver a Home</a>
      </div>
    );
  } else if (!isLoaded) {
    return <div className="cargarPagina">Cargando...</div>;
  } else {
    if (vacio) {
      num = item.num;
    }
    return (
      <>
        <Logo />
        <Validador num={num} />
        <Comic
          title={item.title}
          src={item.img}
          alt={item.alt}
          num={item.num} 
        />
      </>
    );
  }
}

export default App;
