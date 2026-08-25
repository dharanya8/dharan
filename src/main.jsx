import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import LoginModal from "./Project/LoginModal"
import Router1 from './Project/Router1'
import ErrorBoundary from './Project/ErrorBoundary'
import App from './Project/Router1'
import Ap from'./Project/App';
import London from './Project/Cities/London'
createRoot(document.getElementById('root')).render(
  <StrictMode>
         <BrowserRouter>    
                 <ErrorBoundary>
                   <Router1/>
                 </ErrorBoundary>
       </BrowserRouter>      
            {/* <LoginModal/>
            {/* <Ap/> */}
            {/* <London/> */}
      </StrictMode>
)
