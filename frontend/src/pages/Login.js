import React, { useState } from 'react';
import './Login.css';

import api from '../services/api';

import logo from '../assets/tindev.svg';

export default function Login({ history }) {
    const [username, setUserName] = useState(''); // Estado do componente 

    async function handleSubmit(e){
        e.preventDefault(); // bloqueia o padrão do formulário para redirecionar para outra página..isso serve para teste
        //console.log(username);
        const response = await api.post('/devs', {
            username // <- short sintax ou username: username 
        });
        //console.log(response);
        const { _id } = response.data;
        history.push(`/dev/${_id}`);
    }

    return(
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="tindev logo" />
                <input
                    placeholder='Digite seu usuário do GitHub'
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                />
                <button type='submit'>Enviar</button>
            </form>
        </div>     
    );
}

/*
    Conceitos mais utilizados do React
    - Component: 
        Uma função, que retorna um html, e que isola um pedaço da aplicação que será utilizado outras vezes
    - Estado:
        Quando quiser criar uma variável que será manipulada por um compenente, cria-se um estado
    - Propriedades:
        Atributos passados para cada uma das tags. É possível passar propriedades para os componentes
            Para acessar as propriedades: Login(props) ou Login({ x })
*/