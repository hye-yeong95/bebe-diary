import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('https://api.mybebe.net/api/v1/diary/auth/login',{
                email,
                password
            });
            if(result.status === 200) {
                localStorage.setItem('token', result.data.accessToken)
                navigate('/')
            }
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

    const handleClick = (e) => navigate('/register');

    return (
        <div >
             <h1 className='underline'>Login</h1>   
             <form onSubmit={handleSubmit} className='' >
                <input
                    type='email' 
                    placeholder='email을 입력하세요' 
                    onChange={handleChangeEmail} 
                />
                <input 
                    type='password' 
                    placeholder='password를 입력하세요' 
                    onChange={handleChangePassword} 
                />
                <button>Login 버튼</button>
             </form>
             <button onClick={handleClick}>회원 가입하기</button>
        </div>
    );
}

