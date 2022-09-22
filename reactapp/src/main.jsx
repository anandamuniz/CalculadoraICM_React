import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home' //para importar arquivos com extensão JSX não é necessário indicar o tipo da extensão

// Arquivo de estilização global
import './styles/global.css'    //para importar arquivos com extensão CSS é necessário indicar o tipo da extensão

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
