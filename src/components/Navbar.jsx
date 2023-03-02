import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 


export default function Navbar() {
    const [token, setToken] = useState(Boolean(localStorage.getItem('token')))

    const navigate = useNavigate()

    const login = (e) => { 
        navigate('/login') 
    }
    
    const logout = async () => {
        e.preventDefault();
        try {
            await axios.post('https://api.mybebe.net/api/v1/diary/auth/logout',null,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            localStorage.removeItem('token');
            setToken(false)
            alert('로그아웃 성공')
        } catch (e) {
            alert('로그아웃 실패')
        }
    }

    return (
        <div className=' w- h-20 flex justify-between items-center'>
           <h1 className='text-5xl text-[#f95c58]'>Bebe Diary</h1>
           {
            token ? 
            ( <button className='rounded-md text-[#f95c58] ' onClick={logout}>로그아웃 버튼 </button> ) : 
            ( <button className='rounded-md text-[#f95c58]' onClick={login}>로그인 버튼</button> ) 
            }
        </div>
    );
}

