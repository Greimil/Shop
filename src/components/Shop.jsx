import React from "react";
import { NavBar } from "./NavBar";
// import { GridShop } from "./GridShop";
import { Link } from "react-router-dom";

export const Shop = () => {
  return (
    <>
      <NavBar/>
      <div>
        <h2>Tarjetas Gráficas</h2>
        <p>
          En esta sección podrás encontrar todo lo relacionado al apasionante
          mundo de las gráficas, desde las mas económicas hasta las mas top
        </p>
      </div>

      <div>
        <div>
          <div>
            <button>Tarjetas Gráficas</button>
            <button>Procesadores</button>
            <button>Laptops</button>
            <button>Escritorio</button>
          </div>
          
          <div>
            <div>Ordenar por:  <button>Popularidad</button>  </div>
          </div>

          <div>Mostrando 8 productos</div>
        </div>
      </div>


        {/* <GridShop/> */}



    </>
  );
};
