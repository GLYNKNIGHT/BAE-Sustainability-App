import React,{useState, useEffect} from "react";
import "./App.css";

import Input from "./../Input"
import Todolist from "../List/todolist";
import LuckyButton from "../LuckyButton";

function App() {

  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All"); 
  const [filteredTodos, setFilteredTodos] = useState([]);

  const [luckyAction, setLuckyAction] = useState("");
  
  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem('todos', JSON.stringify(todos)));
      setTodos(todoLocal)
      console.log(todoLocal)
    }
  }
  
  return (
    <div className="App">
      <header>
      <h1> CARBON BUSTERS </h1>
      </header>
      <Todolist 
        filteredTodos={filteredTodos} 
        setTodos={setTodos} 
        todos={todos} />     
      <p>{luckyAction}</p> 
      <LuckyButton 
        luckyAction={luckyAction}
        setLuckyAction={setLuckyAction}
      />
      <h2>Add a challenge to the list!</h2>
      <Input 
        userInput={userInput} 
        todos={todos} 
        setTodos={setTodos} 
        setUserInput={setUserInput}
        setStatus={setStatus}
        />
    </div>
  );
}

export default App;


