import React from 'react';

export default function TagDetail({tagValue, diary}) {

    switch(tagValue) {
        case 1 : 
            return <div>{diary.content}</div>
        case 2 : 
            return <div>
                <h1>아기 몸무게?</h1>
                <div>
                    <p>{diary.weight}</p>
                    <p>Kg</p>
                </div>
                <h2>아기 키?</h2>
                <div>
                    <p>{diary.height}</p>
                    <p>cm</p>
                </div>
            </div>
        case 3 : 
            return <div>{diary.text}</div>
        default : 
        return ;
}}

