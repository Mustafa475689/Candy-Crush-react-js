import React from "react"


const ScoreBoard = ({score, highScore}) => {
     
    return (

        <>
        <div className="score-board">
            <h2 className="score">Score: {score}</h2> 
            <h3 className="highScore">High Score: {highScore}</h3>
        </div>
        </>

    )
}

export default ScoreBoard