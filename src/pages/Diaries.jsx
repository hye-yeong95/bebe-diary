import axios from 'axios';
import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Diaries() {

    const [diaries, setDiaries] = useState([]);
    
    // useEffect(() => {
    //     getDiaries();
    // },[])

    const getDiaries = async () => {
        e.preventDefault();
        const response = await axios.get('https://api.mybebe.net/api/v1/diary');
        console.log(response);
        setDiaries(response.data.data);
    }

    const navigate = useNavigate();

    // const [diaries, setDiaries] = useState([
    //    { id:1, date: '2024.12.25', title: '아기 다이어리 제목', mood:'맑음' },
    //    { id:2, date: '2024.12.25', title: '아기 다이어리 제목', mood:'맑음' },
    //    { id:3, date: '2024.12.25', title: '아기 다이어리 제목', mood:'맑음' },
    //    { id:4, date: '2024.12.25', title: '아기 다이어리 제목', mood:'맑음' },
    // ]);

    
    const handleClick = (diaryId) => navigate(`/diary/${diaryId}`);

    const handleClickNew = () => navigate('/diary/new');

    return (
        <div>
            <h1>Diart List Page</h1>
            <button onClick={handleClickNew} >다이어리 작성하기</button>
            <section>
                <ul>
                {
                    diaries.map((diary) => (
                        <li onClick={() => handleClick(diary.id)} key={diary.id}>
                            <span>{diary.date}</span>
                            <span>{diary.title}</span>
                            <span>{diary.mood}</span>
                        </li>
                    ))
                }
                </ul>
            </section>
        </div>
    );
}

