import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Logo from './componets/ComA/logo.jsx'
import Nav from './componets/ComB/nav.jsx'
import Btn from './componets/ComC/btn.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Logo />
    <Nav />
    {/* <Btn /> */}
  </React.StrictMode>,
)
