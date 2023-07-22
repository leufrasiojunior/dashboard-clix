import { React, useState } from 'react'
import axios from 'axios'

function index() {

    const Data = {
        "login": "leonald.junior",
        "senha": "Leo!@#2034"
    }
    const [login, setLogin] = useState(Data);
    const handleLogin = () => {
        setLogin(login)
        console.log(setLogin)
    }
    console.log(login)
    return (
        <div>
        </div>
    )
}

export default index