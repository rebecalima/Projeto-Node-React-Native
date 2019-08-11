import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import api from '../services/api';

import logo from '../assets/tindev.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({ match }){ // match tem todos os paramêtros passados para essa rota
    
    const [ users, setUsers ] = useState([]); 

    useEffect(() => {
        async function loadUsers(){
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id
                }   
            })

            setUsers(response.data);
        }

        loadUsers();  
    }, [match.params.id]);

    async function handleLike(id){ // Toda ação que é gerada apartir de um ação do usuário começa com handle - não obrigatório
        console.log('like', id);

    }

    async function handleDislike(id){
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: {
                userid: match.params.id
            }             
        })

        setUsers(users.filter(user => user._id != id)); 

    }

    return (
        <div className="main-container">
            <Link to='/'>
                <img src={logo} alt="tindev logo" />
            </Link>
            {users.length > 0 ? (
                <ul>
                {users.map(user => (
                    <li key={user._id}>
                        <img src={user.avatar} alt='Foto do Dev'/>
                        <footer>
                            <strong>{user.name}</strong>
                            <p>{user.bio}</p>
                        </footer>
                        <div className='buttons'>
                            <button type='button' onClick={() => handleLike(user._id)}>
                                <img src={like} alt='Like' />
                            </button>
                            <button type='button' onClick={() => handleDislike(user._id)}>
                                <img src={dislike} alt='Dislike' />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            ) : (
                <div className='empty'>Acabou :(</div>
            )}
        </div>
    );
}