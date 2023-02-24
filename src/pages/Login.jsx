import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
            const result = await axios.post('https://api.mybebe.net/api/auth/login',{
                email,
                password
            });
            if(result.status === 200) {
                localStorage.setItem('token', result.data.token)
                navigate('/')
            }
            console.log(result)
        } catch (error) {
            if(error.response.status === 422) {
                setPassword('')
            }
        }
    }


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    return (
        <div>
             <h1>Login Page</h1>   
             <form onSubmit={handleSubmit}>
                <input type='email' placeholder='email을 입력하세요' onChange={handleChangeEmail} value={email} />
                <input type='password' placeholder='password를 입력하세요' onChange={handleChangePassword} value={password} />
                <button>Login 버튼</button>
             </form>
        </div>
       
    );
}

