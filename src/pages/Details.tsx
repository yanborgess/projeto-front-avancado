import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Box, Heading, Text, Button, Spinner, Alert, Separator, VStack } from '@chakra-ui/react';
import { api } from '../services/api';

interface UserDetail {
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
  };
}

export const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [user, setUser] = useState<UserDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get<UserDetail>(`/users/${id}`);
        setUser(response.data);
      } catch (err) {
        setError('Usuário não encontrado ou falha de conexão.');
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchUserDetail();
  }, [id]);

  if (loading) {
    return (
      <Container py={10} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Spinner size="xl" color="blue.500" />
      </Container>
    );
  }

  if (error || !user) {
    return (
      <Container py={10}>
        <Alert.Root status="error" borderRadius="md" mb={4}>
          <Alert.Content>{error || 'Dados inexistentes.'}</Alert.Content>
        </Alert.Root>
        <Button onClick={() => navigate('/')} colorScheme="blue">Voltar para Home</Button>
      </Container>
    );
  }

  return (
    <Container maxW="container.md" py={8}>
      <Box p={8} borderWidth="1px" borderRadius="lg" shadow="lg" bg="white">
        <Heading mb={4} size="lg" color="blue.600">{user.name}</Heading>
        <Separator mb={4} />
        <VStack align="start" gap={3}>
          <Text><strong>E-mail:</strong> {user.email}</Text>
          <Text><strong>Telefone:</strong> {user.phone}</Text>
          <Text><strong>Website:</strong> {user.website}</Text>
          <Text><strong>Empresa:</strong> {user.company.name}</Text>
          <Text><strong>Slogan:</strong> <i>"{user.company.catchPhrase}"</i></Text>
        </VStack>
        <Button mt={6} colorScheme="blue" variant="outline" onClick={() => navigate('/')}>
          Voltar para Home
        </Button>
      </Box>
    </Container>
  );
};