import React from 'react';
import Card from '../Card/card';

function Todolist ({todos, setTodos, filteredTodos}){

    return(
        <div className="todosection">

            <h2>Green tasks for today: </h2>
                <div className="card-container">         
                    
                    <div className='left-cards'>
                    <Card/>
                    <Card/> 
                    <Card/>
                    </div>
                    <div className='right-cards'>
                    <Card/>
                    <Card/> 
                    <Card/>
                    </div>
                   
                </div>
            </div>
        )
}

export default Todolist

/*{filteredTodos.map(todo => (
    <Item 
        text={todo.text} 
        key={todo.id} 
        todos={todos}
        setTodos={setTodos}
        todo={todo}
        />
))}*/