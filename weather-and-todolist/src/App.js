import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ToDoTemplate from "./component/toDoList/toDoTemplate";
import WeatherTemplate from "./component/weather/weatherTemplate";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={ToDoTemplate} />
        <Route exact path="/Weather" component={WeatherTemplate} />
      </div>
    </BrowserRouter>
  );
};

export default App;
