import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Components/App'
import AboutUs from './pages/AboutUS'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
