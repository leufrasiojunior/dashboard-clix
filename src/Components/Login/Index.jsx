import axios from "axios"
import { useState } from "react"
import { Container, Form } from "./style"
import Input from '../Input/index'
import { BotaoCustomizado } from '../Botao/style'


axios.defaults.headers.post['Content-Type'] = 'application/json';

function Login() {
  const [userName, createUser] = useState('')
  const [password, setPassword] = useState('')
  const submitLogin = (e) => {
    e.preventDefault()
    const payload = { login: userName, senha: password }
    axios.post('https://api.2clix.com.br/v3/Usuario/login', payload)
      .then(response => {
        localStorage.setItem('UserToken', response.data.token);
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <Container>
      <Form>
        <h1>Dashboard 2Clix</h1>
        <label>Nome de usuario</label>
        <Input
          type="text"
          placeholder="Usuário 2Clix"
          onChange={(event) => {
            createUser(event.target.value)
          }}
          value={userName}
        />
        <label>Senha</label>
        <Input
          type="password"
          placeholder="Senha 2Clix"
          onChange={(pass) => {
            setPassword(pass.target.value)
          }}
          value={password}
        />
        {/* <button onClick={submitLogin}>Login</button> */}
        <BotaoCustomizado type='submit'
          onClick={submitLogin}>
          Logar
        </BotaoCustomizado>
      </Form>
    </Container >
  )
}

export default Login