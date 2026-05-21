import React, { useState, useEffect } from 'react';
import { Container, SimpleGrid, Heading, Spinner, Alert, Box, Text } from '@chakra-ui/react';
import { api } from '../services/api';
import { UserCard } from '../components/UserCard';

interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

export const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get<User[]>('/users');
        setUsers(response.data);
      } catch (err) {
        setError('Falha ao carregar os dados da API externa. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <Container py={10} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Spinner size="xl" color="blue.500" />
        <Text mt={4}>Buscando usuários...</Text>
      </Container>
    );
  }

  if (error) {
    return (
      <Container py={10}>
        <Alert.Root status="error" borderRadius="md">
          <Alert.Content>{error}</Alert.Content>
        </Alert.Root>
      </Container>
    );
  }

  return (
    <Container maxW="container.lg" py={8}>
      <Heading mb={6} size="xl" color="gray.800">Lista de Desenvolvedores</Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={6}>
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            company={user.company.name}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};