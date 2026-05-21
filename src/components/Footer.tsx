import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export const Footer: React.FC = () => {
  return (
    <Box bg="gray.100" py={4} mt="auto" borderTop="1px" borderColor="gray.200">
      <Text textAlign="center" fontSize="sm" color="gray.600">
        &copy; {new Date().getFullYear()} - Aplicação React Avançada. Todos os direitos reservados.
      </Text>
    </Box>
  );
};