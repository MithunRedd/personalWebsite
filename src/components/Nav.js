import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, useColorModeValue, Text } from "@chakra-ui/react";
import About from "./about/About";
import Contact from "./Contact";
import Portfolio from "./portfolio/Portfolio";

export default function Nav() {
    return (
    <Tabs align="start" variant="soft-rounded" colorScheme="blackAlpha">
        <TabList my={3} justifyContent='center'>
                <Tab _hover={{transform: 'translateY(-2px)', transition: 'all .2s'}}>
                    <Text ml="2px" pb="6px" fontSize={["xs", "sm", "lg", "lg"]} color={useColorModeValue("coral", "white")}>about</Text>
                </Tab>
                <Tab _hover={{transform: 'translateY(-2px)', transition: 'all .2s'}}>
                    <Text ml="2px" pb="6px" fontSize={["xs", "sm", "lg", "lg"]} color={useColorModeValue("coral", "white")}>portfolio</Text>
                </Tab>
                <Tab _hover={{transform: 'translateY(-2px)', transition: 'all .2s'}}>
                    <Text ml="2px" pb="6px" fontSize={["xs", "sm", "lg", "lg"]} color={useColorModeValue("coral", "white")}>contact</Text>
                </Tab>
        </TabList>
        <TabPanels mt={3}>
          <TabPanel>
            <About/>
          </TabPanel>
          <TabPanel>
            <Portfolio/>
          </TabPanel>
            <TabPanel>
            <Contact/>
          </TabPanel>
        </TabPanels>
    </Tabs>
      
  )
}