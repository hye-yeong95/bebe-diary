import React, { useState } from 'react';
import TagInfo from '../components/TagInfo';
import TagButton from '../components/ui/TagButton';

export default function NewDiary() {

    const [tagValue, setTagValue] = useState(1);

    return (
        <div>
            <h1>New Diary</h1>

            <div>
                <form>
                    
                    <div className='flex flex-col md:flex-row'>
                      <div className='flex md:flex-col w-full md:w-1/2'>
                        <TagButton text={'그냥 다이어리'} onclick={()=>setTagValue(1)} /> 
                        <TagButton text={'아이 성장 다이어리'}  onclick={()=>setTagValue(2)} /> 
                        <TagButton text={'쇼핑리스트'}  onclick={()=>setTagValue(3)} /> 
                      </div>
                      <div className='w-full md:w-1/2'>
                        <TagInfo tagValue={tagValue} />
                      </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

