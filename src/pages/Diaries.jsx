import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Diaries() {

    const [diaries, setDiaries] = useState([]);
    
    useEffect(() => {
        getDiaries();
    },[])

    const getDiaries = async () => {
        const response = await axios.get('https://api.mybebe.net/api/v1/diary', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        console.log(response);
        setDiaries(response.data);
    }

    const navigate = useNavigate();
    
    const handleClick = (diaryId) => navigate(`/diary/${diaryId}`);

    const handleClickNew = () => navigate('/diary/new');

    if(!diaries) return <h1>loading...</h1>

    return (
        <div>
            <h1>Diart List Page</h1>
            <button onClick={handleClickNew} >다이어리 작성하기</button>
            <section>
                <ul>
                {
                    diaries ? diaries.map((diary) => (
                        <li onClick={() => handleClick(diary.id)} key={diary.id}>
                            <span>{diary.date}</span>
                            <span>{diary.title}</span>
                            <span>{diary.mood}</span>
                        </li>
                    )) : <h1>Loading...</h1>
                }
                </ul>
            </section>
        </div>
    );
}

