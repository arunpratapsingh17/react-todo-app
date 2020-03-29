import uuid from "uuid";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <ToDoInput></ToDoInput>
            <ToDoList></ToDoList>
          </div>
        </div>
      </div>
    );
  }
}
