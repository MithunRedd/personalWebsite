import React from 'react';
import { Box, Heading, Stack, VStack, Text, Button, HStack, Link } from "@chakra-ui/react";
import AboutTags from "./AboutTags";


export default function About() {
  return (
    <>
      <Stack
        direction={["column", "column", "row", "row"]}
        justifyContent="center"
        justifyItems="center"
        p={2}
        marginX="auto"
      >
        
        <VStack 
          justifyContent="center"
          pl={2}
        ><Heading mt={4} mb={7}>About</Heading>
          <Box
            maxW="60ch"
                  >
                    <Text color="gray" noOfLines={10}>
                          Hey Hi! My name is Mithun Reddy. I was born and raised in Hyderabad.
                          I'm pursuing my B.tech degree in computer science from ICFAI Foundation For Higher Education.
                          I have interned with a few mid-size companies and was able to work closely with their mobile and web developers.
                          I also have a lot of experience with online code repositories, and I love to contribute as much as I can.
                    </Text>
                      
                        <Heading as='h2' size="md" mt={8} mb={5}>
                          Technical Skills
                        </Heading>
                  <AboutTags />
                    <HStack mt={8} justifyContent='center' fontSize={["sm", "md", "lg", "xl"]} >
                     <Text color="gray">Feel free to see my</Text> <Link color="coral" target="_blank" rel="noreferrer"href='https://gitconnected.com/mithunredd/resume'><Button>Resume</Button></Link>
                    </HStack>
            </Box>
        </VStack>
      </Stack>
      
      
    </>
  )
}
