import React from "react";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";
import DataNull from "../dataNull";
import SearchBar from "./searchBar";
import "./weather.css";
import WeatherChart from "./weatherChart";

const WeatherTemplate = () => {
  const weather = useSelector((store) => store.weather);
  console.log(weather);
  const Chartlist = [];
  if (weather !== null) {
    const weatherLength = weather.list.length;
    const wethaerList = weather.list;
    const time = wethaerList.map((item) => item.dt_txt.slice(11, 16));
    const temp = wethaerList.map((item) => item.main.temp);
    const pop = wethaerList.map((item) => item.pop * 100);
    for (let i = 0; i < weatherLength; i++) {
      const list = {
        time: time[i],
        temp: temp[i],
        pop: pop[i],
      };
      Chartlist.push(list);
    }
  }

  return (
    <Container className="weatherContainer">
      <SearchBar />
      <div className="mt-3">
        {weather === null ? (
          <DataNull data="weather" />
        ) : (
          <WeatherChart chartItem={Chartlist} cityName={weather.city.name} />
        )}
      </div>
    </Container>
  );
};

export default WeatherTemplate;
