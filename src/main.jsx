import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './assets/globalstyle';
import { HeaderTop } from '../src/assets/HeaderTop.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeaderTop />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
