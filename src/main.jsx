
import { StrictMode } from 'react';
import './index.css';
import App from './Components/App.jsx';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}