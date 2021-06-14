import React, { useState } from "react";
import ChartTemplate from "./chartTemplate";

const WeatherChart = ({ chartItem, cityName }) => {
  const [activeTab, setActiveTab] = useState("temp");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  switch (activeTab) {
    case "temp":
      return (
        <ChartTemplate
          chartItem={chartItem}
          cityName={cityName}
          toggle={toggle}
          menu="temp"
          firstColor="red"
          lastColor="gold"
        />
      );
    case "pop":
      return (
        <ChartTemplate
          chartItem={chartItem}
          cityName={cityName}
          toggle={toggle}
          menu="pop"
          firstColor="blue"
          lastColor="lightblue"
        />
      );
    default:
      return;
  }
};

export default WeatherChart;
