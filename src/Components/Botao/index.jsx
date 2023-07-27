import React from 'react'
import { BotaoCustomizado } from './style'

function Botao(type) {

    return (
        <BotaoCustomizado
            type={type}
        >
            Logar
        </BotaoCustomizado>
    )
}

export default Botao