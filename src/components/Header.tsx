import React from 'react';
import { Box, Flex, Heading, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <Box bg="blue.600" px={4} color="white" shadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading size="md">DevCatalog</Heading>
        <Flex gap={4}>
          <Button asChild variant="ghost" colorScheme="whiteAlpha">
            <RouterLink to="/">Home</RouterLink>
          </Button>
          <Button asChild variant="ghost" colorScheme="whiteAlpha">
            <RouterLink to="/about">Sobre</RouterLink>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};