import React from "react";
import forestImage from "./assets/ForestMap.jpeg";
import "./ForestSection.css";
import CircleIcon from "@mui/icons-material/Circle";
import SquareIcon from "@mui/icons-material/Square";

const ForestSection = ({SensorsAlerting}) => {
  const RegisterSensorsId = ["gas1","flame1","gas2","flame2","gas3","flame3","gas4","flame4","gas5","flame5","gas6","flame6"];
  const SensorsId = [2, 4, 10];
  return (
    <div className="ForestSectionWrapper">
      <img src={forestImage} alt="forestImage" className="Forestimage" />

      <div className="ImageGrid">
        {RegisterSensorsId.map((items, index) => {
          return (
            <div key={index} className="MapGrids">
              {!SensorsId?.includes(index) &&
                (index % 2 === 0 ? (
                  <CircleIcon style={{ fontSize: "14px", color:SensorsAlerting.includes(items)? "red" : "Green" }} />
                ) : (
                  <SquareIcon style={{ fontSize: "14px", color:SensorsAlerting.includes(items)? "red" : "Blue" }} />
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForestSection;
