import {Box, IconButton, useDisclosure } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import {Slide} from '@chakra-ui/react'
 import Sidebar from './sidebar'
 import { useState } from 'react'
export const Navbar = ()=> {
    const { isOpen, onToggle } = useDisclosure()
    const [navSize, changeNavSize] = useState("small")
    return (
 
        <Box w="100%">
        <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu color='gray'/>}
                    onClick={()=>{
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }
                        
                       
                    }
                />
                <Slide direction='left' in={isOpen} style={{ zIndex: 10 }}>
 <Sidebar />
                </Slide>
        </Box>
    )
}