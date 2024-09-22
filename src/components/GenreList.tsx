import React from 'react'
import useGenres from '../hooks/useGenres'

const GenreList = () => {

    const { genres, error, isLoading } = useGenres()

    return (
        <ul>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
            ))}
        </ul>
    )
}

export default GenreList