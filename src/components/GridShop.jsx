import React from "react";
import { nanoid } from "nanoid";
import grafica1 from "../assets/ProductosImgs/grafica1.png";
import grafica2 from "../assets/ProductosImgs/grafica2.png";
import grafica3 from "../assets/ProductosImgs/grafica3.png";
import grafica4 from "../assets/ProductosImgs/grafica4.png";
import grafica5 from "../assets/ProductosImgs/grafica5.png";
import grafica6 from "../assets/ProductosImgs/grafica6.png";
import grafica7 from "../assets/ProductosImgs/grafica7.png";
import grafica8 from "../assets/ProductosImgs/grafica8.png";

export const GridShop = (props) => {
  const cells = [
    { img: grafica1, nameCapacity: "GEFORCE GTX 980 4GB", price: "$99" },
    { img: grafica2, nameCapacity: "GEFORCE GTX 1070 6GB", price: "$180" },
    { img: grafica3, nameCapacity: "GEFORCE GTX 1070 4GB", price: "$130" },
    { img: grafica4, nameCapacity: "GEFORCE GTX 660 2GB", price: "$50" },
    { img: grafica5, nameCapacity: "RX 6500 XT 8GB", price: "$3000" },
    { img: grafica6, nameCapacity: "RX 5600 XT 6GB", price: "$220" },
    { img: grafica7, nameCapacity: "RX 470 4GB", price: "$80" },
    { img: grafica2, nameCapacity: "RX 6950 XT 4GB", price: "$50" },
  ];
  return (
    <div className="md:ml-32 md:mr-32  grid md:grid-cols-4 gap-4 grid-rows-2 ">
      {cells.map((current) => {
        return (
          <div key={nanoid()} role="cell" className="  h-[332px] cursor-pointer  ">
            <img className="m-auto " src={current.img} alt="" />
            <figcaption className="text-center  " >{current.nameCapacity}</figcaption>
             <strong className="font-semibold text-center   block " >{current.price}</strong>
          </div>
        );
      })}
    </div>
  );
};
 