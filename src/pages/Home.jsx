import React from 'react';
import { useSelector } from 'react-redux';

export default function Home() {

    const user = useSelector((state) => state.user.value)
    console.log(user)
    return (
        <div>
            <h1>Home Page</h1>
            
        </div>
    );
}

