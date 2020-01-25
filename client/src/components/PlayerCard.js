import React from 'react'

const PlayerCard = ({ player }) => {
    const { name, country } = player;
    return (
        <div className="playerCard">
            <h2>{name}</h2>
            <h4>{country}</h4>
        </div>
    )
}

export default PlayerCard