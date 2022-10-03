import React from "react";
import { NavBar } from "./NavBar";
import { GridShop } from "./GridShop";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const Shop = () => {
  return (
    <>
      <NavBar />
      <div className="bg-blackPrimary md:paddings pb-4 pt-4 ">
        <h2 className="font-semibold text-4xl">Tarjetas Gráficas</h2>
        <p className="font-semibold text-base md:max-w-md">
          En esta sección podrás encontrar todo lo relacionado al apasionante
          mundo de las gráficas, desde las mas económicas hasta las mas top
        </p>
      </div>

      <div className="md:paddings pt-12 pb-12">
        <div className=" flex md:justify-between">
          <div className="flex  flex-wrap justify-center items-center  gap-2 ">
            <button className="btnRed  text-sm bg-black pl-2 pr-2 ">GPU</button>
            <button className="btnRed text-sm pl-2 pr-2">Procesadores</button>
            <button className="btnRed text-sm pl-2 pr-2">Laptops</button>
            <button className="btnRed text-sm pl-2 pr-2">Escritorio</button>
          </div>
          <div className="flex  items-center justify-end  flex-row  gap-3">
            <span>Ordenar por: </span>
            <button className="btnRed pr-2 pl-2 text-sm  flex items-center ">
              Popularidad <IoIosArrowDown />{" "}
            </button>
          </div>

          <div className="hidden  p-3">Mostrando 8 productos</div>
        </div>
      </div>

      <GridShop />

      <div className="p-9" >
        <div className="flex items-center  justify-center" >
          <IoIosArrowBack color="#C70000" className="mr-3 cursor-pointer " />
          <div>
            <button className="p-4  " >1</button> <button className="p-4  " >2</button> <button className="p-4  ">3</button>
            <button className="p-4 text-seconday " >4</button> <button className="p-4  " >5</button> <button className="p-4  " >6</button>
            <button className="p-4  " >7</button> <button className="p-4  " >8</button>
          </div>
          <IoIosArrowForward  className="ml-3 cursor-pointer   " color="#C70000" />
        </div>
      </div>
    </>
  );
};
