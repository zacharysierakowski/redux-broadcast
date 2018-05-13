import React from "react";
import { broadcasted } from "redux-broadcast";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default broadcasted(App);
