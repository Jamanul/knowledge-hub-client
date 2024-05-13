import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

import '@smastrom/react-rating/style.css'


const BookCard = ({singleBook}) => {
    const {_id,name,
        image_url,
        quantity,
        author,
        rating,
        short_description,
        long_description,
        category} =singleBook
    return (
        <div className="card w-96 shadow-xl">
                <div className='flex flex-col'>
                    
                <figure className='p-4 w-96 h-[500px] flex-grow'><img src={image_url} alt="Shoes" /></figure>
                  
                <div className="card-body flex-grow">
                  <h2 className="card-title text-3xl text-[#666666]">{name}</h2>
                  <h2 className='text-[#666666] text-xl'><span className='text-2xl'>Author: </span>{author}</h2>
                  <h2 className='text-[#666666] text-xl'><span className='text-2xl'>Category:</span> {category}</h2>
                  <h2 className='text-[#666666] text-xl flex gap-4'><span className='text-2xl'>Rating: </span>  <Rating style={{ maxWidth: 100 }} value={rating} readOnly /></h2>
                  <div className="card-actions justify-end">
                  <button className="btn bg-[#666666] text-[#fc984c] font-bold"><Link to={`/detailsPage/${_id}`}>Details</Link></button>
                  </div>
                </div>
                </div>
                
              </div>
    );
};

export default BookCard;