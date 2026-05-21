import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface UserCardProps {
  id: number;
  name: string;
  email: string;
  company: string;
}

export const UserCard: React.FC<UserCardProps> = ({ id, name, email, company }) => {
  const navigate = useNavigate();

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
      <VStack align="stretch" gap={2}>
        <Heading size="sm">{name}</Heading>
        <Text fontSize="xs" color="gray.500">{email}</Text>
        <Text fontSize="sm">Empresa: {company}</Text>
        <Button 
          colorScheme="blue" 
          size="sm" 
          width="full" 
          onClick={() => navigate(`/details/${id}`)}
        >
          Ver Detalhes
        </Button>
      </VStack>
    </Box>
  );
};