import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React, { useEffect, useState } from 'react';

const RowView = () => {
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
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>Image</th>
        <th>Name</th>
        <th>Author</th>
        <th>Category</th>
        <th>Rating</th>
        <th>More</th>
      </tr>
    </thead>
    <tbody>
      {
        bookData.map((book,idx)=>
            <tr key={book._id}>
                <th>{idx+1}</th>
                <td><img className='w-10' src={book.image_url} alt="" /></td>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td> <Rating style={{ maxWidth: 100 }} value={book.rating} onChange={setRating} readOnly /></td>
                <td><button className="btn bg-[#666666] text-[#fc984c] font-bold">Update</button></td>
            </tr>
        )
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default RowView;