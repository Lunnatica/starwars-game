import React from "react"
import { useSelector } from "react-redux"

function GameCard(props) {
    const state = useSelector(state => state)
    const currentCard = props.id === "P1" ? state.cards.card1 : state.cards.card2

    const ResultBadge = () => state.players.winner === props.id ?
        <span style={{ width: "15rem" }} className="badge badge-success">Winner!</span> :
        <span className="badge badge-danger">Looser!</span>
    const ResultBadgeDraw = () => <span className="badge badge-info">Draw!</span>

    const BattleAttribute = () => Object.keys(currentCard).includes("mass") ?
        <div className="card-text">Mass: {currentCard.mass}</div> :
        <div className="card-text">Crew: {currentCard.crew}</div>

    const CardHeader = () => currentCard.name ? 
        <h5 className="card-header" style={{ height: "5rem", alignItems:"center" }}>{currentCard.name}</h5> :
        <h5 className="card-title" style={{ height: "5rem" }}>"Waiting to battle..."</h5>

    return (
        <div className="card" style={{ width: "22rem" }}>
            {
                state.players.winner ?
                    (state.players.winner === "draw" ?
                        <ResultBadgeDraw /> :
                        <ResultBadge />) : null
            }
            <div className="card-body">
                <CardHeader />
                { (Object.keys(currentCard).length) ? <BattleAttribute /> : null }
            </div>
        </div>
    )
}

export default GameCard