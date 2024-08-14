import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
// import { robots } from "../Robots";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import ErrorBoundry from "../components/ErrorBoundry";

function App() {
  // constructor() {
  //   super();
  //   this.state = { robots: robots, searchField: "" };
  // }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ robots: robots }));
  // }
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
    console.log(count);
  }, [count]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  // const { robots, searchField } = this.state;
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });
  return !robots.length ? (
    <h1>"Loading"</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">Robots</h1>
      <h3>
        {" "}
        "A hyper-speed app forged in the digital depths by relentless
        code-forging automatons"{" "}
      </h3>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;
