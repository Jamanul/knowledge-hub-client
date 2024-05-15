import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React, { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

const CardView = () => {
    const [filteredBooks]=useOutletContext()
    //console.log(filteredBooks)
    const [rating, setRating] = useState(0)
   
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            {
                filteredBooks.map(book=><div key={book._id} className="card w-96 shadow-xl">
                <div className='flex flex-col'>
                    
                <figure className='p-4 w-96 h-[500px] flex-grow'><img src={book.image_url} alt="Shoes" /></figure>
                  
                <div className="card-body flex-grow">
                  <h2 className="card-title text-3xl text-[#666666]">{book.name}</h2>
                  <h2 className='text-[#666666] text-xl'><span className='text-2xl'>Author: </span>{book.author}</h2>
                  <h2 className='text-[#666666] text-xl'><span className='text-2xl'>Category:</span> {book.category}</h2>
                  <h2 className='text-[#666666] text-xl flex gap-4'><span className='text-2xl'>Rating: </span>  <Rating style={{ maxWidth: 100 }} value={book.rating} onChange={setRating} readOnly /></h2>
                  <div className="card-actions justify-end">
                  <button className="btn bg-[#666666] text-[#fc984c] font-bold"><Link to={`/updatePage/${book._id}`}>Update</Link></button>
                  </div>
                </div>
                </div>
                
              </div>)
            }
        </div>
    );
};

export default CardView;