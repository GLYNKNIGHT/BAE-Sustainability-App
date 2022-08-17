
export default function Card ( {myScore, setMyScore, title, value}){

    function handleClick(){
        let newScore = Number(myScore) - value
        setMyScore(newScore)
    }

    return(
    <div className="card">
        <p>{title}</p>
        <p>{value} points</p>
        <button id="minusButton" onClick={handleClick}> - </button>
    </div>) 
    

}