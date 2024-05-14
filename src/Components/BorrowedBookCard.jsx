import axios from "axios";
import { toast } from "react-toastify";


const BorrowedBookCard = ({singleBook,setBorrowedBooksData,borrowedBooksData}) => {
    const {_id,name,
        image_url,
        quantity,
        author,
        rating,
        short_description,
        long_description,
        category,returnDate,borrowedDate} =singleBook
        const handleReturnBook =(id,singleBook)=>{
            console.log(singleBook)
            axios.patch(`https://knowledge-hub-server-jkskb25-gmailcom-jamanul-sakibs-projects.vercel.app/all-returned-books-test/${id}`,singleBook)
            .then(data=>{console.log(data.data)
            // if(data.data.modifiedCount){
            //     toast.success('You have borrowed a book.')
            // }
            })
           axios.delete(`https://knowledge-hub-server-jkskb25-gmailcom-jamanul-sakibs-projects.vercel.app/all-borrowed-books/${id}`)
           .then(data=>{console.log(data.data)
            if(data.data.deletedCount>0){
                toast.success('you have returned your book.')
                const remaining =borrowedBooksData.filter(singleBook=>singleBook._id!==id)
                setBorrowedBooksData(remaining)
            }
            
        })
            
        }
    return (
        <div className="card w-96 shadow-xl">
        <div className='flex flex-col'>
            
        <figure className='p-4 w-96 h-[500px] flex-grow'><img src={image_url} alt="Shoes" /></figure>
          
        <div className="card-body flex-grow">
          <h2 className="card-title text-3xl text-[#666666]">{name}</h2>
          <h2 className='text-[#666666] text-xl'><span className='text-2xl'>Author: </span>{author}</h2>
          <h2 className='text-[#666666] text-xl'><span className='text-2xl'>Category:</span> {category}</h2>
          <h2 className='text-[#666666] text-xl'><span className='text-2xl'>Borrowed Date:</span> {borrowedDate}</h2>
          <h2 className='text-[#666666] text-xl'><span className='text-2xl'>Return Date:</span> {returnDate}</h2>
          <div className="card-actions justify-end">
          <button onClick={()=>handleReturnBook(_id,singleBook)} className="btn bg-[#666666] text-[#fc984c] font-bold">Return Book</button>
          </div>
        </div>
        </div>
        
      </div>
    );
};

export default BorrowedBookCard;