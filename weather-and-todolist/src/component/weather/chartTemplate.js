import React from "react";
import ChartItem from "./chartItem";
import ChartMenu from "./chartMenu";

const ChartTemplate = ({
  chartItem,
  cityName,
  toggle,
  menu,
  firstColor,
  lastColor,
}) => {
  return (
    <div style={{ border: "1px solid lightgray", borderRadius: "5px" }}>
      <h1>{cityName}</h1>
      <ChartMenu toggle={toggle} />
      <ChartItem
        chartItem={chartItem}
        menu={menu}
        firstColor={firstColor}
        lastColor={lastColor}
      />
    </div>
  );
};

export default ChartTemplate;
