import React from 'react'
import { 
    HStack,
    useColorModeValue,
    Tooltip
} from '@chakra-ui/react';
import { Mail, GitHub, Twitter, Linkedin } from 'react-feather'

const Icons = () => {
    return (
        <HStack p="3%" justifyContent='center'
            color={useColorModeValue("coral", "gray")}
            fontSize={["sm", "md", "lg", "xl"]}
        >
            <a target="_blank" rel="noreferrer" href="mailto:mitunreddy1357@gmail.com">
                <Tooltip bg="blackAlpha" color={useColorModeValue("green.500", "coral")} label="Mail"><Mail width="50" size="20" /></Tooltip>
            </a>
        
            
            <a target="_blank" rel="noreferrer" href="https://github.com/MithunRedd">
                <Tooltip bg="blackAlpha" color={useColorModeValue("green.500", "coral")} label="GitHub"><GitHub width="50" size="20" /></Tooltip>
            </a>

            <a target="_blank" rel="noreferrer" href="https://twitter.com/mithunreddy1357">
                <Tooltip bg="blackAlpha" color={useColorModeValue("green.500", "coral")} label="Twitter"><Twitter width="50" size="20" /></Tooltip>
            </a>

            <a target="_blank" rel="noreferrer" href="https://twitter.com/mithunreddy1357">
                <Tooltip bg="blackAlpha" color={useColorModeValue("green.500", "coral")} label="LinkedIn"><Linkedin width="50" size="20" /></Tooltip>
            </a>
            
      </HStack>
    )
}

export default Icons
