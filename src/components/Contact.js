import React from 'react';
import { SimpleGrid, Input, Button, Heading, TabList, Link } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react"
import {
  FormControl,
  FormLabel,
  Textarea
} from "@chakra-ui/react"

export default function Contact() {
  return (
    <>
      <VStack>
      <Heading mt={4} mb={7}>
          Contact
        </Heading>
      </VStack>
      <TabList justifyContent='center' mb={10}>
        <SimpleGrid rows={3} spacing={5} >
          <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Email" />
      
        </FormControl>
        <FormControl id="first-name" isRequired >
        <FormLabel>Name</FormLabel>
          <Input placeholder="Name" />
          </FormControl>
          <FormControl id="description" isRequired >
        <FormLabel>Description</FormLabel>
          <Textarea placeholder="Say Something" />
          </FormControl>
          <Button colorScheme="teal" size="md" type="submit">
            <Link href="mailto:mitunreddy1357@gmail.com" target="_blank">
              Submit
            </Link>
          </Button>
          </SimpleGrid>
      </TabList>
        
  
    </>
  )
}

