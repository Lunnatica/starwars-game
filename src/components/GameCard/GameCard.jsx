import React from "react"
import { useSelector } from "react-redux"

function GameCard(props) {
    const state = useSelector(state => state)
    let currentCard = {}
    if (props.id === "P1") currentCard = state.cards.card1
    else currentCard = state.cards.card2
    return (
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="http://animaticons.co/wp-content/uploads/2015/10/ps-image-size.jpg" alt="Card cap"/>
                <div className="card-body">
                    <h5 className="card-title">{currentCard.name}</h5>
                    {({} !== {}) ? 
                            <div className="card-text">
                                <p>Height: {currentCard.height}</p>
                                <p>Mass: {currentCard.mass}</p>
                                <p>Gender: {currentCard.gender}</p>
                            </div>
                        : null
                    }
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    )
}

export default GameCard