import React from 'react'
import axios from 'axios'
import PlayerCard from './PlayerCard'

class PlayerData extends React.Component{
    constructor() {
        super();
        this.state = {
            players: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/players')
            .then(res => this.setState({players: res.data}))
    }
    render() {
        return (
            <div className="players">
                {this.state.players.map(player => {
                    return <PlayerCard key={player.id} player={player}/>
                })}
            </div>
        )
    }
}

export default PlayerData