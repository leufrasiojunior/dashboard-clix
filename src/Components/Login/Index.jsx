import axios from "axios"
import { useState } from "react"
import { Container, Form } from "./style"
import Input from '../Input/index'
import { BotaoCustomizado } from '../Botao/style'
import userServices from "../../Services/UserService"
axios.defaults.headers.post['Content-Type'] = 'application/json';

const userService = new userServices();

function Login() {
  const [userName, createUser] = useState('')
  const [password, setPassword] = useState('')
  const submitLogin = async (e) => {
    e.preventDefault();
    const response = await userService.login({ login: userName, senha: password }, userName)
    console.log(response);
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
        <BotaoCustomizado type='submit'
          onClick={submitLogin}>
          Logar
        </BotaoCustomizado>
      </Form>
    </Container >
  )
}

export default Login