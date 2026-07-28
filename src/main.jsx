import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Components/App'
import AboutUs from './pages/AboutUS'
import { ModalProvider } from './Context/ModalContext'


createRoot(document.getElementById('root')).render(
  <ModalProvider>
    <App/>
  </ModalProvider>
)
