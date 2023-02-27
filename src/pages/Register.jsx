import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
       try {
            const result = await axios.post('https://api.mybebe.net/api/v1/diary/auth/join',{
                name,
                email,
                password,
                gender,
                birthDate: birth,
            });
            if(result.status === 200){
                navigate('/');
            }
       } catch (error) {
            if(error.response.status === 422){
                alert('회원가입 오류입니다.')
            }
       }
    }
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [birth, setBirth] = useState('');

    const handleChangeName = (e) => setName(e.target.value);
    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
    const handleChangeGender = (e) => setGender(e.target.value);
    const handleChangeBirth = (e) => setBirth(e.target.value);
    
    return (
       <div>
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='name' onChange={handleChangeName}/>
            <input type='email' placeholder='email' onChange={handleChangeEmail} />
            <input type='password' placeholder='password' onChange={handleChangePassword} />
            <input type='text' placeholder='gender' onChange={handleChangeGender} />
            <input type='date' placeholder='생년월일' onChange={handleChangeBirth} />
            <button>회원가입 버튼</button>
        </form>
       </div>
    );
}

