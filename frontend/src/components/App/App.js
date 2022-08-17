import React,{useState} from "react";
import "./App.css";
import AppHeader from "../Header/header";
import Todolist from "../List/todolist";
import Navbar from "../Navbar/navbar";
import LuckyButton from "../LuckyButton";

function App() {
  const [myScore, setMyScore] = useState(10000)
  const [teamScore, setTeamScore] = useState(50000)

  
  return (
    <div className="App">
      <AppHeader 
        teamScore={teamScore}
        setTeamScore={setTeamScore}
        myScore={myScore} 
        setMyScore={setMyScore} />
       <Todolist 
        myScore={myScore}
        setMyScore={setMyScore}
         />     
      <LuckyButton 
        teamScore={teamScore}
        setTeamScore={setTeamScore}
        myScore={myScore}
        setMyScore={setMyScore}
      />
        <Navbar />
    </div>
  );
}

export default App;


