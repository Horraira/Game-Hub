import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: Sohan
            </MenuButton>
            <MenuList>
                <MenuItem>Revelent</MenuItem>
                <MenuItem>Date</MenuItem>
                <MenuItem>Nan</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default SortSelector