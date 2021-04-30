import React from 'react';
import { 
  useColorModeValue, 
  VStack,
  HStack,
  Text,
  Box,
  Heading
} from '@chakra-ui/react';
import "@fontsource/poppins"
import Icons from "./Icons";
import { Coffee } from 'react-feather';
import { FiCornerDownLeft, FiCornerDownRight } from "react-icons/fi";
import "@fontsource/cinzel"



export default function HomePage() {
  return (
    <>
      <VStack>
        <Box color={useColorModeValue("green.500", "coral")}>
          <Coffee size='35' />
        </Box>
        <Heading
          as="h1"
          textTransform="lowercase"
          fontFamily="cinzel"
              color={useColorModeValue("gray.600", "teal.500")}
              fontSize={["sm", "md", "lg", "xl"]}
                letterSpacing="widest"
        > mithun reddy
           
        </Heading>
        <HStack color={useColorModeValue("gray.500", "gray.300")}>
            <FiCornerDownRight/><Text>designer & developer</Text><FiCornerDownLeft/>
          </HStack>

        
        <Icons />

        

      </VStack>
      
      
    </>
  )
}