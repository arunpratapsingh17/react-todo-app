import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
export default class ToDoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <section>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">todo list</h3>
          {items.map((item) => {
            return (
              <ToDoItem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              ></ToDoItem>
            );
          })}
          <button
            type="button"
            className="btn btn-danger btn-block text-uppercase mt-5"
            onClick={clearList}
          >
            clear List
          </button>
        </ul>
      </section>
    );
  }
}
