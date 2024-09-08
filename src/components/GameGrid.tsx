import useGames from "../hooks/useGames"

const GameGrid = () => {
    const { games, error } = useGames()

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