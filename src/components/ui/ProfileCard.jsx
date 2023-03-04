import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfileCard() {

    const navigate = useNavigate();
    const [user, setUser] =useState();

    const userClickHandler = (e) => { navigate('/user')}

    const getUserProfile = async () => {
        try {
            const response = await axios.get('https://api.mybebe.net/api/v1/diary/profile',{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setUser(response.data);
        } catch (error) {
            console.log(error);
        }
    }

   useEffect(()=>{
    getUserProfile();
   },[])

   if(!user) {
    return <h1>Loading...</h1>
}
//acxios 할 때는 무조건 해야함, 무언가 불러올 때 
 
    return (
        <div>
            <h1 onClick={userClickHandler} >{user.name}</h1>
        </div>
    );
}

