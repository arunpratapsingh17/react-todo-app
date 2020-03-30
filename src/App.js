import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import React, { Component } from "react";
import uuid from "uuid/v4";
import "@fortawesome/fontawesome-free/css/all.min.cssrtr";

export default class App extends Component {
  state = {
    items: [
      { id: 1, title: "Wake up" },
      { id: 2, title: "Make BReakfast" }
    ],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    console.log("handleChange se hi");
  };
  handleSubmit = e => {
    console.log("handleSubmit se hi");
  };
  clearList = e => {
    console.log("Hi from clear list function");
  };
  handleDelete = id => {
    console.log(`HandleDelete function $(id)`);
  };
  handleEdit = id => {
    console.log(`HandleEdit function $(id)`);
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-8 max-auto mt-5">
              <h3 className="text-capitalize text-center">todo input</h3>
              <ToDoInput
                item={this.state.item}
                handleChange={this.state.handleChange}
                handleSubmit={this.state.handleSubmit}
                editItem={this.state.editItem}
              />
              <ToDoList
                items={this.state.items}
                clearList={this.state.clearList}
                handleDelete={this.state.handleDelete}
                handleEdit={this.state.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
