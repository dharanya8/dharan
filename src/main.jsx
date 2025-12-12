import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import LoginModal from "./Project/LoginModal"
import Router1 from './Project/Router1'
import App from './Project/Router1'
import Ap from'./Project/App';
createRoot(document.getElementById('root')).render(
  <StrictMode>
         <BrowserRouter>    
                 <Router1/> 
       </BrowserRouter>     
            {/* <LoginModal/> */}
            {/* <Ap/> */}
      </StrictMode>
)
