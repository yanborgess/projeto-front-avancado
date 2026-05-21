import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Passando o defaultSystem garantimos que todos os cards, botões e cores do Chakra funcionem */}
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)