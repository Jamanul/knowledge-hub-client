import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React, { useEffect, useState } from 'react';

const CardView = () => {
    const [bookData,setBookData]=useState([])
    const [rating, setRating] = useState(0)
    useEffect(()=>{
        fetch('http://localhost:5000/all-books')
        .then(res=>res.json())
        .then(data=>setBookData(data))
    },[])
    console.log(bookData)
    return (
        <div>
            this is card
        </div>
    );
};

export default CardView;