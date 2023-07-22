import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const Data = {
    login: "leonald.junior",
    senha: "Leo!@#2034"
  }
  fetch("https://api.2clix.com.br/v3/Usuario/login",
    {
      method: "POST",
      // mode: "no-cors",
      headers: { 'Content-Type': 'application/json' },
      body: {
        "login": "leonald.junior",
        "senha": "Leo!@#2034"
      }
    })
    .then((resp) => { resp.json().then((result) => { console.warn("result", result) }) })

  return (
    <>
    </>
  )
}
export default App
