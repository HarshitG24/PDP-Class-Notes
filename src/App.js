import "./App.css";
import React, { Component } from "react";
class SearchBar extends Component {
  // props has all values which is received from the parent
  constructor(props) {
    super(props);

    this.state = {
      query: "Harshit",
    };
  }

  onSearchChange(eve) {
    console.log("searched changed", eve.target.value);
    this.setState({
      query: eve.target.value,
    });
  }

  render() {
    return (
      <label htmlFor="">
        Search:
        <input
          type="text"
          value={this.state.query}
          onChange={this.onSearchChange.bind(this)}
        />
      </label>
    );
  }
}
class TestLists extends Component {
  tests = Array.from({ length: 5 }).map((d, i) => ({
    name: `Test ${i}`,
    length: Math.random() * 20,
  }));

  renderTests() {
    return this.tests.map((test) => <li key={test.name}>{test.name}</li>);
  }

  render() {
    return <ul>{this.renderTests()}</ul>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div class="App-header">
        <h1>Test Manager</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
          quia tempora cum pariatur officiis laborum nemo nam consectetur
          distinctio unde nostrum repellat minus odio, quam ea magni dolorem,
          impedit eum.
        </p>
        <SearchBar />
        <h2>Current Tests</h2>
        <TestLists />
      </div>
    );
  }
}

export default App;
