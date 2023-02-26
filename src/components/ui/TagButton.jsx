import React from 'react';

export default function TagButton({text, onclick}) {
    return (
        <p onClick={onclick} className='bg-yellow-200 w-28 '>{text}</p>
    );
}

