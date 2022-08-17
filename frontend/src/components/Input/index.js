import React,{useState} from "react";



function Input({setStatus, setUserInput, userInput, todos, setTodos}){
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setUserInput(e.target.value);
    }; 

    const submitToDoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: userInput, completed: false, id: Math.random()*1000 }
        ] 
        );
        setUserInput("");
    };

    const statusHandler = (e) => {
        console.log(e.target.value);
        setStatus(e.target.value);
    }

    return(
    <form>
        <input value={userInput} onChange={inputTextHandler} type ="text" className="todo-input" />
        <button onClick={submitToDoHandler} className="todo-button" type="submit">ADD</button>
        <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
    )
}



export default Input;

//</button>onChange={userInput}/>)
