import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
export default class ToDoList extends Component {
  render() {
    return (
      <section>
        <h1>Hi From todolist</h1>
        <ToDoItem></ToDoItem>
      </section>
    );
  }
}
