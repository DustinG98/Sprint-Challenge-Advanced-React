import React from 'react'
import { PieChart, Pie, Legend, Cell } from 'recharts'

const PlayerSearchChart = ({players}) => {
    let filteredPlayers = players.filter(player => player.searches > 6)

    let colorArr = ["#f68819", "#a84a32", "#ff8f73", "#ff7373", "#73ff9f", "#10c94a", "#107cc9", "#107cc9", "#3210c9", "#c91079"]
    return (
        <div className="chartCont" data-testid="searchChart">
            <h2>Player Searches > 6</h2>
            <PieChart width={500} height={250} data-testid="searchChart">
                <Pie data={filteredPlayers} dataKey="searches" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80} label>
                    {players.map((player, index) => <Cell fill={colorArr[index % colorArr.length]}/>)}
                </Pie>
                <Legend />
            </PieChart>
        </div>
    )
}

export default PlayerSearchChart