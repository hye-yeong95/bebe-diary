import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function UserEdit() {

    const navigate = useNavigate();

    const [user, setUser] = useState();
    const [name, setName] = useState();
    const [gender, setGender] = useState();
    const [birth, setBirth] = useState();

    const handleClickName = (e) => {setName(e.target.value)}
    const handleClickGender = (e) => {setGender(e.target.value)}
    const handleClickBirth = (e) => {setBirth(e.target.value)}
   
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put('https://api.mybebe.net/api/v1/diary/profile/edit', {
                name,
                gender,
                birthDate: birth,
            },{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            if(response.status === 200 ){
                navigate('/user');
            }
        } catch (error) {
            console.log(error);
        }
    }

    if(!user) {
        return <h1>Loading...</h1>
    }
    
    return (
        <div>
            <h1>User Edit</h1>
            <form onSubmit={handleSubmit}>
                <h1>이름 :</h1>
                <input type='text' onChange={handleClickName} defaultValue={user.name} />
                <h1>성별 :</h1>
                <input type='text' onChange={handleClickGender} defaultValue={user.gender} />
                <h1>생년월일 :</h1>
                <input type='date' onChange={handleClickBirth} defaultValue={user.birthDate} />
                <button>수정완료하기</button>
            </form>
        </div>
    );
}

