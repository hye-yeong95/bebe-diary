import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TagDetail from '../components/TagDetail';
import DeleteButton from '../components/ui/DeleteButton';
import TagButton from '../components/ui/TagButton'

export default function DiaryDetail() { 

    const {diaryId} = useParams();
    const navigate = useNavigate();

    const [diary, setDiary] = useState(null);

    const [tagValue, setTagValue] = useState(1);

    const getDiaryDetail = async () => {
        try {
            const response = await axios.get(`https://api.mybebe.net/api/v1/diary/detail/${diaryId}`,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setDiary(response.data);
        } catch (error) {
            navigate('/diaries')
        }
    }

    const deleteHandler =async (e) => {
        try {
            const response = await axios.delete(`https://api.mybebe.net/api/v1/diary/delete/${diaryId}`,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            alert('삭제 성공!!')
        } catch (error) {
            alert('삭제 실패!')
        }
    }

    useEffect(() => {
        getDiaryDetail();
    },[])

    const editHandleClick = (e) => { navigate(`/diary/${diaryId}/edit`)}
    
    if(!diary) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1> Diary Detial</h1>
        <div>
            <h1>작성한 날짜는?</h1>
            <p>{diary.createdAt}</p> 
        </div>
        <div>
            <form>
                <div>
                    <h1>{diary.title}</h1>
                </div>
                <div className='flex flex-col md:flex-row'>
                  <div className='flex md:flex-col w-full md:w-1/2'>
                    <TagButton text={'그냥 다이어리'} onclick={()=>setTagValue(1)} /> 
                    <TagButton text={'아이 성장 다이어리'}  onclick={()=>setTagValue(2)} /> 
                    <TagButton text={'쇼핑리스트'}  onclick={()=>setTagValue(3)} /> 
                  </div>
                  <div className='w-full md:w-1/2'>
                    <TagDetail tagValue={tagValue} diary={diary} />
                  </div> 
                </div>
                <div>
                    <button onClick={editHandleClick}>수정하기</button>
                    <DeleteButton onClick={deleteHandler} />
                </div>
            </form>
        </div>
    </div>
    );
}

