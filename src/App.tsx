import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { About } from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      {/* Estrutura base de Layout Flex nativa em CSS para manter o app fluido */}
      <Box 
        display="flex" 
        flexDirection="column" 
        minHeight="100vh" 
        backgroundColor="gray.50"
      >
        <Header />
        
        {/* O flex="1" faz com que o conteúdo principal empurre o Footer para o final da página */}
        <Box as="main" flex="1" width="100%">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </Router>
  );
};

export default App;