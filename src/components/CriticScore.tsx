import { Badge } from '@chakra-ui/react'
import { color } from 'framer-motion'

interface Props {
    score: number
}

const CriticScore = ({ score }: Props) => {

    let color = score >= 75 ? 'green' : score >= 60 ? 'yellow' : 'red'

    return (
        <Badge
            borderRadius='4px'
            fontSize='12px' padding='5pxss'
            colorScheme={color}>
            {score}
        </Badge>
    )
}

export default CriticScore