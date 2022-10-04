import React, {useState, useEffect} from "react";
import { nanoid } from "nanoid";


export const GridShop = (props) => {
  const {Imgs} = props
  const cells = Object.entries(Imgs);



  return (
    <div className="md:ml-32 md:mr-32  grid md:grid-cols-4 gap-4 grid-rows-2 ">
      {cells.map((current) => {
        return (
          <div key={nanoid()} role="cell" className="  h-[332px] cursor-pointer  ">
            <img className="m-auto " src={current[1].link} alt="" />
            <figcaption className="text-center  " >{current[1].descrip}</figcaption>
             <strong className="font-semibold text-center   block " >{current[1].price}</strong>
          </div>
        );
      })}
    </div>
  );
};
 