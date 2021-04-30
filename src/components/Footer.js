import React from 'react'
import { 
  useColorModeValue,
  HStack,
  VStack,
    Text,
    Box,
  Link
} from '@chakra-ui/react';
import { Mail, GitHub, Twitter, Linkedin, Facebook, Instagram } from 'react-feather'
import Quote from './Quote'


const Footer = () => {
    return (
        <>
        <VStack pb="5">
        <Link href="">
                <Text
                    fontFamily="poppins"
                    color={useColorModeValue("gray.600", "teal.500")}
                    fontSize={["sm", "md", "lg", "xl"]}
                        letterSpacing="widest"
                        mt="4" mb='2'
                    > mithun reddy
           
                </Text>
                </Link>
                
            </VStack>
            
        <HStack pb="10" justifyContent='center' color={useColorModeValue("coral", "gray")} fontSize={["sm", "md", "lg", "xl"]}>

            <a target="_blank" rel="noreferrer" href="mailto:mitunreddy1357@gmail.com">
                <Mail width="30" size="20" />
            </a>

            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100008918739130">
                <Facebook width="30" size="20" />
            </a>
            
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/mithunreddyy">
                <Instagram width="30" size="20" />
            </a>
        
            <a target="_blank" rel="noreferrer" href="https://github.com/MithunRedd">
                <GitHub width="30" size="20" />
            </a>

            <a target="_blank" rel="noreferrer" href="https://twitter.com/mithunreddy1357">
                <Twitter width="30" size="20" />
            </a>

            <a target="_blank" rel="noreferrer" href="https://twitter.com/mithunreddy1357">
                <Linkedin width="30" size="20" />
            </a>
            
            </HStack>

            <VStack >
                <Box justifyContent='center' size='xs'>
                    <Quote />
                </Box>
            </VStack>

            <VStack pt="10" pb="10" color={useColorModeValue("gray", "gray")}>
                <Text >&copy; 2021 — <Link href="#">Mithun Reddy</Link></Text>
            </VStack>
        </>
    )
}

export default Footer;
