import TodoInput from "./components/TodoInput";
import ToDoList from "./components/ToDoList";
import React, { Component } from "react";

import { v4 as uuidv4 } from "uuid";

import "@fortawesome/fontawesome-free/css/all.min.css";

export default class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    console.log("Handle Submit");
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState(
      {
        items: updatedItems,
        item: "",
        id: uuidv4(),
        editItem: false,
      },
      () => console.log(this.state),
      console.log("Hi")
    );
  };
  clearList = () => {
    this.setState({
      items: [],
    });
  };
  handleDelete = (id) => {
    const filteredItem = this.state.items.filter((item) => item.id != id);
    this.setState({
      items: filteredItem,
    });
  };
  handleEdit = (id) => {
    console.log(`HandleEdit function $(id)`);
  };
  // editItem = () => {
  //   console.log("hellllooo");
  // };
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-8 max-auto mt-5">
              <h3 className="text-capitalize text-center">todo input</h3>
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.editItem}
              />
              <ToDoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.state.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
