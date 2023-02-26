import axios from 'axios';
import React, { useState } from 'react';
import TagInfo from '../components/TagInfo';
import TagButton from '../components/ui/TagButton';

export default function NewDiary() {

    const [text, setText] = useState('')
    const [content, setContent] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')


    const [date, setDate] = useState('')
    const handleChangeDate = (e) => setDate(e.target.value);

    const [tagValue, setTagValue] = useState(1);

    const [title, setTitle] = useState('');
    const handleChangeTitle = (e) => setTitle(e.target.value);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const result = await axios.post('https://api.mybebe.net/api/v1/diary',{
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
      } catch (error) {
        console.log(error)
      }
    }

    return (
        <div>
            <h1>New Diary</h1>
            <div>
              <h1>오늘의 날짜는?</h1>
              <input type='date' onChange={handleChangeDate} /> 
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                      <input type='text' placeholder='제목을 쓰세요' onChange={handleChangeTitle} value={title}/>
                    </div>
                    <div className='flex flex-col md:flex-row'>
                      <div className='flex md:flex-col w-full md:w-1/2'>
                        <TagButton text={'그냥 다이어리'} onclick={()=>setTagValue(1)} /> 
                        <TagButton text={'아이 성장 다이어리'}  onclick={()=>setTagValue(2)} /> 
                        <TagButton text={'쇼핑리스트'}  onclick={()=>setTagValue(3)} /> 
                      </div>
                      <div className='w-full md:w-1/2'>
                        <TagInfo tagValue={tagValue} text={text} setText={setText} content={content} weight={weight} height={height} setContent={setContent} setHeight={setHeight}
                        setWeight={setWeight} />
                      </div> 
                    </div>
                    <button>다이어리 등록하기</button>
                </form>
            </div>
        </div>
    );
}

