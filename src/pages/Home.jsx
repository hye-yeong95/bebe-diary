import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();
    
    const handleClick = (e) => navigate('/login');
    
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleClick} >로그인하기</button>
        </div>
    );
}

