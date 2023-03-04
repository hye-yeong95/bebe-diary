import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function UserProfile() {

    const navigate = useNavigate();

    const [user, setUser] = useState();

    const goToUserEdit = (e) => { navigate('/user/edit')}

    const getUserProfile = async () => {
        try {
            const response = await axios.get('https://api.mybebe.net/api/v1/diary/profile',{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            console.log(response);
            setUser(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserProfile();
    }, [])

    if(!user) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>User Profile</h1>
            <form>
                <h1>이름 :</h1>
                <p>{user.name}</p>
                <h1>성별 :</h1>
                <p>{user.gender}</p>
                <h1>생년월일 :</h1>
                <p>{user.birthDate}</p>
            </form>
            <button onClick={goToUserEdit}>수정하기</button>
        </div>
    );
}

