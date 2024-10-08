import { Button, Heading, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react'
import useGameQueryStore from '../hooks/gameStore'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'


const GenreList = () => {
    const { data, isLoading, error } = useGenres()
    const selectedGenreId = useGameQueryStore(state => state.gameQuery.genreId)
    const setGenreId = useGameQueryStore(state => state.setGenreId)

    if (error) return null
    if (isLoading) return <Spinner />

    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List>
                {data?.results.map(genre => (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image
                                src={getCroppedImageUrl(genre.image_background)}
                                alt={genre.name}
                                objectFit='cover'
                                boxSize='32px' borderRadius={8} />
                            <Button
                                whiteSpace='normal'
                                textAlign='left'
                                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                                onClick={() => setGenreId(genre.id)}
                                fontSize='lg' variant='link'>{genre.name}</Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default GenreList