import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { TictactoeProvider } from from '../contexts/TicTacToeContext';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TictactoeProvider>
      <App />
    </TictactoeProvider>
  </StrictMode>,
)
