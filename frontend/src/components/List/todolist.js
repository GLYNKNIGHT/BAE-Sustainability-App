import React from 'react';
import Card from '../Card/card';
import {tasks} from '../../lib.js'

function Todolist ({myScore, setMyScore}){

    return(
        <div className="todosection">

            <h2>Green tasks for today: </h2>
                <div className="card-container">         
                    
                    <div className='left-cards'>
                        <Card myScore={myScore} setMyScore={setMyScore} title={tasks[0].title} value={tasks[0].score}/>
                        <Card myScore={myScore} setMyScore={setMyScore} title={tasks[1].title} value={tasks[1].score}/>
                        <Card myScore={myScore} setMyScore={setMyScore} title={tasks[2].title} value={tasks[2].score}/>
                    </div>
                    <div className='right-cards'>
                        <Card myScore={myScore} setMyScore={setMyScore} title={tasks[3].title} value={tasks[3].score}/>
                        <Card myScore={myScore} setMyScore={setMyScore} title={tasks[4].title} value={tasks[4].score}/>
                        <Card myScore={myScore} setMyScore={setMyScore} title={tasks[5].title} value={tasks[5].score}/>
                    </div>
                   
                </div>
            </div>
        )
}

export default Todolist
