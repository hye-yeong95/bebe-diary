import React, { useState } from 'react';

export default function TagInfo({tagValue}) {

    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)

        console.log(text);
    }

    switch(tagValue) {
        case 1 : 
            return <input onChange={handleChange} type='text' placeholder='다이어리를 입력하세요 1 '/>
        case 2 : 
            return <input type='text' placeholder='다이어리를 입력하세요 2 '/>
        case 3 : 
            return <input type='text' placeholder='다이어리를 입력하세요 3 '/>
        default : 
        return ;
    }
}

