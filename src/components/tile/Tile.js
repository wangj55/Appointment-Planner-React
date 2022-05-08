import React from "react";

export const Tile = ({ tile }) => {
  return (
    <div className="tile-container">
      {tile.values.map((value, index) => {
        return (
          <p key={index} className={index === 0 ? "tile-title" : "tile"}>
            {value}
          </p>
        );
      })}
    </div>
  );
};
