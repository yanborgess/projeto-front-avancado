# 💻 DevCatalog — Catálogo de Desenvolvedores

## 📝 Sobre o Projeto
Este projeto é uma aplicação web interativa desenvolvida em **React com TypeScript e Vite**, criada como requisito parcial para a obtenção de nota da **2ª Avaliação da Unidade Curricular de Tecnologia para FrontEnd Avançado** (Centro Universitário UNIESP).

O objetivo principal é demonstrar na prática o domínio de conceitos avançados de arquitetura frontend, incluindo componentização baseada em propriedades (Props), gerenciamento de estado reativo, ciclo de vida de componentes, roteamento dinâmico em Single Page Applications (SPA) e consumo de APIs REST externas de forma assíncrona.

---

## 🛠️ Tecnologias e Bibliotecas Utilizadas
Para o desenvolvimento do ecossistema da aplicação, foram integradas as seguintes ferramentas:
- **React 18**: Biblioteca base para a construção da interface modular.
- **TypeScript**: Superset que adiciona tipagem estática, garantindo segurança e escalabilidade ao código (Type Safety).
- **Vite**: Ferramenta de build ultra-rápida para o ambiente de desenvolvimento.
- **Chakra UI (v3)**: Framework de estilização e biblioteca de componentes visuais baseada em *Style Props* e design responsivo.
- **React Router DOM**: Gerenciador de rotas declarativas para navegação interna sem recarregamento de página.
- **Axios**: Cliente HTTP robusto para a interceptação e consumo de dados de endpoints externos.

---

## 🌐 API Externa Consumida
A aplicação integra-se de forma assíncrona com a API REST pública **JSONPlaceholder**.
- **Endpoint principal utilizado:** `/users`
- **Funcionalidades implementadas:** - Listagem geral de dados de forma síncrona com o ciclo de vida.
  - Busca sob demanda de perfis individuais via parâmetros de rota (`/users/${id}`).
  - Tratamento visual de estados de carregamento (`Spinner`) e tratamento robusto de erros e exceções de conexão (`try/catch/finally` e `Alert.Root`).

---

## 📂 Estrutura de Pastas do Projeto (`/src`)
O projeto foi organizado seguindo padrões de *clean code* e separação de conceitos:
```text
src/
├── components/       # Componentes globais e reutilizáveis (Header, Footer, UserCard)
├── pages/            # Telas mapeadas pelo sistema de rotas (Home, Details, About)
├── services/         # Configuração e instâncias de serviços de API (Axios)
├── App.tsx           # Arquivo mestre de layout e definição do ecossistema de Rotas
└── main.tsx          # Ponto de entrada oficial do React e injeção do ChakraProvider