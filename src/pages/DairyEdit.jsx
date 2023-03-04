import React from 'react';
import TagButton from '../components/ui/TagButton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TagEdit from '../components/TagEdit';


export default function DairyEdit() {
    const {diaryId} = useParams();
    const navigate = useNavigate();

    const [diary, setDiary] = useState(null);
    const [text, setText] = useState('')
    const [content, setContent] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')

    const [tagValue, setTagValue] = useState(1);

    const getDiaryDetail = async () => {
        try {
            const response = await axios.get(`https://api.mybebe.net/api/v1/diary/detail/${diaryId}`,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            console.log(response);

            setDiary(response.data);
            setTitle(response.data.title);
            setContent(response.data.content);
            setWeight(response.data.weight);
            setHeight(response.data.height);
        } catch (error) {
            console.log(error)
        //    alert('불러오기 실패!')
        }
    }

    useEffect(() => {
        getDiaryDetail();
    },[])

    const goBackHandler = (e) => { navigate('/diaries')}

    const [date, setDate] = useState('')
    const handleChangeDate = (e) => setDate(e.target.value);

    const [title, setTitle] = useState('');

    const handleChangeTitle = (e) => setTitle(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(title, content, weight, height)
            const result = await axios.put(`https://api.mybebe.net/api/v1/diary/edit/${diaryId}`,{
            title,
            content,
            weight,
            height,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
              }
            });
            console.log(result);
            navigate('/diaries');
        } catch (error) {
          console.log(error);
        }
      }

    if(!diary) {
      return <h1>Loading...</h1>
    }


    return (
       <div>
            <h1>Edit Diary</h1>
            <div>
              <h1>작성한 날짜는?</h1>
              <input type='date' onChange={handleChangeDate} defaultValue={diary.date} /> 
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                      <input type='text' onChange={handleChangeTitle} value={diary.title} />
                    </div>
                    <div className='flex flex-col md:flex-row'>
                      <div className='flex md:flex-col w-full md:w-1/2'>
                        <TagButton text={'그냥 다이어리'} onclick={()=>setTagValue(1)} /> 
                        <TagButton text={'아이 성장 다이어리'}  onclick={()=>setTagValue(2)} /> 
                        <TagButton text={'쇼핑리스트'}  onclick={()=>setTagValue(3)} /> 
                      </div>
                      <div className='w-full md:w-1/2'>
                        <TagEdit tagValue={tagValue} text={text} setText={setText} content={content} weight={weight} height={height} setContent={setContent} setHeight={setHeight}
                        setWeight={setWeight} />
                      </div> 
                    </div>
                    <button>다이어리 등록하기</button>
                </form>
                <button onClick={goBackHandler}>돌아가기</button>
            </div>
        </div>
    );
}

