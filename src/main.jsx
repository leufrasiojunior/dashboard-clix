import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './assets/globalstyle';
import { HeaderTop } from '../src/assets/HeaderTop.jsx'
import Rotas from './Routes/index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeaderTop />
    <GlobalStyle />
    <Rotas />
  </React.StrictMode>,
)
