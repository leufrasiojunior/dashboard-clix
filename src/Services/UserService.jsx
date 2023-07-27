import axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'application/json';


export default class userServices {

    constructor() {
        this.axios = axios.create({
            baseURL: 'https://api.2clix.com.br/v3'
        })
        // console.log(process.env.REACT_APP_API_LOGIN);
    }
    async login(dados, userName) {
        // console.log(dados)
        const currentDateTime = new Date();
        const futureDateTime = new Date(currentDateTime);
        futureDateTime.setHours(currentDateTime.getHours() + 24);
        console.log(currentDateTime > futureDateTime
            ? "Token Expirado. Faça login novamente" : "Token válido. Redirecionando...")
        const { data } = await this.axios.post('/Usuario/login', dados)

        if (data) {
            localStorage.setItem('token', data.token)
            localStorage.setItem('Username', userName)
            localStorage.setItem('DataLogin', currentDateTime)
            localStorage.setItem('Expiration', futureDateTime)
            return true
        }
        return
    }

}