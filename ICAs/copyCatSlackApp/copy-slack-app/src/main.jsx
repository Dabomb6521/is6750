import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import MessagesProvider from './store/MessagesStore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Use the Messages Provider Component in the entire app */}
    <MessagesProvider>
    <App />
    </MessagesProvider>
  </StrictMode>,
)
