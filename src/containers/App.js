import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { requestRobots } from "../actions";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import Header from "../components/Header";

import "./App.css";
import SomeButton from "../components/SomeButton";

function App() {
  const searchField = useSelector((state) => state.searchRobots.searchField);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  const { robots, isPending, error } = useSelector(
    (state) => state.requestRobots
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestRobots());
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return isPending ? (
    <h1>Loading {error}</h1>
  ) : (
    <div className="tc">
      <Header />
      <SomeButton color={"red"} handleClick={handleClick} count={count} />
      <SearchBox />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
