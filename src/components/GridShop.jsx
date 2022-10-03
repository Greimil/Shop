import React from "react";

const GridShop = (props) => {
  const cells = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      
        {
            cells.map((current)=> {
                return <div role="cell" ></div>
            } )
        }

    </div>
  );
};

export default GridShop;
