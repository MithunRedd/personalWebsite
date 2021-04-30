import React from 'react';
import { useColorMode, Box, IconButton, HStack, Heading } from '@chakra-ui/react';
import { Sun, Moon } from 'react-feather';
import "@fontsource/cinzel"


export default function ThemeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box>
        <HStack p={5} justifyContent='flex-end'>
            
          <Heading fontFamily="cinzel" size='md' >{"~ MR ~"}</Heading>
        <IconButton 
        icon={colorMode === 'light' ? <Sun size="16" /> : <Moon size="16" />}
        onClick={toggleColorMode}
            variant="ghost"
            size="xs"
          />
        </HStack>
      </Box>
    </>
  );
}