import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from "../entities/Platform"
import usePlatform from '../hooks/usePlatform'
import useGameQueryStore from '../hooks/gameStore'

const PlatformSelector = () => {
    const { data, error } = usePlatforms()

    const selectedPlatformId = useGameQueryStore(state => state.gameQuery.platformId)
    const selectedPlatform = usePlatform(selectedPlatformId)
    const setSelectedPlatformId = useGameQueryStore(state => state.setPlatformId)

    if (error) return null

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || 'Select Platform'}
            </MenuButton>
            <MenuList>
                {data?.results.map(platform => (
                    <MenuItem onClick={() => setSelectedPlatformId(platform.id)} key={platform.id}>{platform.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector