import React, { useState } from 'react'
import axios from 'axios'
export default function HttpPost() {
    const [userName, createUser] = useState('')
    const [password, setPassword] = useState('')
    const onSubmit = async (e) => {
        e.preventDefault()
        const post = { usuario: userName, senha: password }
        const options = {
            headers: { "Access-Control-Allow-Origin": "*", "content-type": "application/json" }
        }
        try {
            console.log(post)
            const res = await axios
                .post('http://api.2clix.com.br/v3/Usuario/login',
                    post, options)
            console.log(res.data)
        } catch (e) {
            alert(e)
        }
    }
    return (
        <div className="container mt-2">
            <h2>React HTTP Post Request Example</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-2 mt-3">
                    <input
                        type="text"
                        placeholder="Name"
                        className="form-control"
                        onChange={(event) => {
                            createUser(event.target.value)
                        }}
                        value={userName}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        className="form-control"
                        onChange={(pass) => {
                            setPassword(pass.target.value)
                        }}
                        value={password}
                    />
                </div>
                <button type="submit" className="btn btn-danger">
                    Create
                </button>
            </form>
        </div>
    )
}