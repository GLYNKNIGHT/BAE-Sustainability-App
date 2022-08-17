import React from 'react';
import Item from '../Item';

function Todolist ({todos, setTodos, filteredTodos}){

    return(
        <div className="todosection">
            <h2>Carbon duties today: </h2>
                <div className="todo-container">         
                    <ul className="todo-list">
                        {filteredTodos.map(todo => (
                            <Item 
                                text={todo.text} 
                                key={todo.id} 
                                todos={todos}
                                setTodos={setTodos}
                                todo={todo}
                                />
                        ))}
                    </ul>
                </div>
            </div>
        )
}

export default Todolist