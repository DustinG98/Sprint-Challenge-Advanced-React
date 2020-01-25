import React from 'react'
import axios from 'axios'
import PlayerCard from './PlayerCard'
import PlayerSearchChart from './PlayerSearchChart'

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
            <div >
                <PlayerSearchChart players={this.state.players}/>
                <div className="players">
                    {this.state.players.map(player => {
                        return <PlayerCard data-testid="player" key={player.id} player={player}/>
                    })}
                </div>
            </div>
        )
    }
}

export default PlayerData