import React, { useState } from 'react';

export default function TagInfo({tagValue, text, setText, weight, setWeight, height, setHeight, content, setContent}) {

    const handleChangeText = (e) => {
        setText(e.target.value);
    }

    const handleChangeWeight = (e) => {
        setWeight(e.target.value);
    }

    const handleChangeHeight = (e) => {
        setHeight(e.target.value);
    }

    const handleChangeContent = (e) => {
        setContent(e.target.value);
    }

    switch(tagValue) {
        case 1 : 
            return <input onChange={handleChangeContent} type='text' placeholder='다이어리를 입력하세요 1 '/>
        case 2 : 
            return <div>
                <h1>아기 몸무게?</h1>
                <div>
                    <input type='text' onChange={handleChangeWeight} />
                    <p>Kg</p>
                </div>
                <h2>아기 키?</h2>
                <div>
                    <input type='text' onChange={handleChangeHeight} />
                    <p>cm</p>
                </div>
            </div>
        case 3 : 
            return <input type='text' onChange={handleChangeText}/>
        default : 
        return ;
    }
}

