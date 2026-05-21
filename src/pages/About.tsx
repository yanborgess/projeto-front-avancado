import React from 'react';
import { Container, Heading, Text, Box, VStack, List } from '@chakra-ui/react';

export const About: React.FC = () => {
  return (
    <Container maxW="container.md" py={8}>
      <Box p={6} borderWidth="1px" borderRadius="md" bg="white" shadow="sm">
        <Heading mb={4} size="lg" color="blue.600">
          Documentação do Projeto (README)
        </Heading>
        
        <VStack align="start" gap={4}>
          <Text color="gray.700">
            <strong>Propósito:</strong> Aplicação web desenvolvida exclusivamente como requisito parcial para a obtenção de nota da <strong>2ª Avaliação da Unidade Curricular de Tecnologia para FrontEnd Avançado</strong>.
          </Text>

          <Box width="100%">
            <Heading size="sm" mb={2} color="gray.800">
              Tecnologias Utilizadas:
            </Heading>
            <List.Root gap={1} variant="marker">
              <List.Item color="gray.700"><strong>React</strong> (Biblioteca SPA base para a interface)</List.Item>
              <List.Item color="gray.700"><strong>TypeScript</strong> (Tipagem estática para segurança do código)</List.Item>
              <List.Item color="gray.700"><strong>Vite</strong> (Ferramenta de build e servidor de desenvolvimento ágil)</List.Item>
              <List.Item color="gray.700"><strong>Chakra UI (v3)</strong> (Biblioteca de componentes visuais e estilização responsiva)</List.Item>
              <List.Item color="gray.700"><strong>React Router DOM</strong> (Gerenciamento de rotas e navegação interna)</List.Item>
              <List.Item color="gray.700"><strong>Axios</strong> (Cliente HTTP para requisições e consumo de dados)</List.Item>
            </List.Root>
          </Box>

          <Box width="100%">
            <Heading size="sm" mb={2} color="gray.800">
              API Externa Consumida:
            </Heading>
            <Text color="gray.700">
              Para a simulação e listagem dinâmica de dados, o projeto consome os serviços da API REST pública e real <strong>JSONPlaceholder</strong> (através do endpoint <code>/users</code>), servindo de base para testes de requisições, tratamento de estados de carregamento (loading) e tratamento de erros.
            </Text>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};