import React from "react";
import "./App.css";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title:</label>
            <input type="text" placeholder="What's the title of your To Do?" />
          </div>
          <div className="todo-input-item">
            <label>Description:</label>
            <input type="text" placeholder="What's the description of your To Do?" />
          </div>
          <div className="todo-input-item">
            <button className="primary-btn" type="button">
              Add
            </button>
          </div>
        </div>
        <div className="btn-area">
          <button className="secondaryBtn">To Do</button>
          <button className="secondaryBtn">Completed</button>
        </div>
        <div className="todo-list">
          <div className="todo-list-item">
            <div>
              <h3>task</h3>
              <p>to do</p>
            </div>
            <div>
              <AiOutlineDelete title="Delete?" className="icon" />
              <BsCheckLg title="Completed?" className=" check-icon" />
            </div>
          </div>
          <div className="todo-list-item">
            <div>
              <h3>task</h3>
              <p>to do</p>
              <p>
                {" "}
                <i>Completed at: 17.10.2023</i>
              </p>
            </div>
            <div>
              <AiOutlineDelete className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
