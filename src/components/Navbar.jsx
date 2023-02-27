import React, {  useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 


export default function Navbar() {

    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          localStorage.setItem('token', token);
        } else {
          delete axios.defaults.headers.common['Authorization'];
          localStorage.removeItem('token');
        }
      }, [token]);
    
    const navigate = useNavigate();

    const login = (e) => { 
        navigate('/login')
    }

    const logout = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('https://api.mybebe.net/api/v1/diary/auth/logout',
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })    
            localStorage.removeItem('token');
            setToken(null);
        
            alert('로그아웃 성공!!')
        } catch (error) {
            alert('로그아웃이 실패하였습니다.');
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

