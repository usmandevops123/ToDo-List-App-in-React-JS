import React from "react"; 
import ReactDom from "react-dom"; 
import "./index.css"; 
import ToDoList from './ToDoList'; 

import App from "./App";

ReactDom.render(<ToDoList></ToDoList>,document.getElementById("root"));