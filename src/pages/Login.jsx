import React, { useState } from 'react';

export default function Login() {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('성공!');
        setEmail('')
        setPassword('')
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    console.log(email, password);

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

