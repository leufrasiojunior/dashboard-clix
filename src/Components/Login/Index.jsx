import axios from "axios"
import { useState } from "react"
import { Container } from "./style"
axios.defaults.headers.post['Content-Type'] = 'application/json';

function Login() {
  const [userName, createUser] = useState('')
  const [password, setPassword] = useState('')
  const submitLogin = (e) => {
    e.preventDefault()
    const payload = { login: userName, senha: password }
    axios.post('https://api.2clix.com.br/v3/Usuario/login', payload)
      .then(response => {
        console.log(response.data.token);
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <Container>
      <form>
        <label>Login</label>
        <div>
          <label>Nome de usuario</label>
          <input
            type="text"
            placeholder="Usuário 2Clix"
            onChange={(event) => {
              createUser(event.target.value)
            }}
            value={userName}
          />
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            placeholder="Senha 2Clix"
            onChange={(pass) => {
              setPassword(pass.target.value)
            }}
            value={password}
          />
        </div>
        <div>
          <button onClick={submitLogin}>Login</button>
        </div>
      </form>

    </Container>
  )
}

export default Login