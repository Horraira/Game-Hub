import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

interface Game {
    id: number
    name: string
    background_image: string
}

interface GameResponse {
    count: number
    results: Game[]
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        apiClient.get<GameResponse>('/games')
            .then(response => setGames(response.data.results))
            .catch(error => setError(error.message))
    }, [])

    return (
        <>
            {error && <p>{error}</p>}
            <ul>
                {games.map(game => (
                    <li key={game.id}>
                        <img src={game.background_image} alt={game.name} />
                        <h2>{game.name}</h2>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default GameGrid