import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../FirebaseAuth/AuthProvider";
import BorrowedBookCard from "../Components/BorrowedBookCard";
import { Link } from "react-router-dom";


const BorrowedBooks = () => {
    const {user}= useContext(AuthContext)
    const [borrowedBooksData,setBorrowedBooksData]=useState([])
    useEffect(()=>{
        axios.get(`https://knowledge-hub-server-rho.vercel.app/all-borrowed-books?email=${user.email}`)
        .then(data=>setBorrowedBooksData(data.data))
    },[user.email])
    //console.log(borrowedBooksData)
    return (
        <div>
             <div className="text-center">
        <h1 className="text-4xl text-[#666666]">
          Borrowed  {" "}
          <span
            className="text-[#E17A2A]"
          >
            Books
          </span>
        </h1>
        <h2 className="mt-6 text-xl text-[#666666]">See the books you have borrowed.</h2>
        <Link to='/buy-books'><p className="mt-6 text-xl flex justify-end text-[#666666] md:ml-[850px] btn">Click here to buy all the borrowed books.</p></Link>
      </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                borrowedBooksData.map(singleBook=><BorrowedBookCard setBorrowedBooksData={setBorrowedBooksData} borrowedBooksData={borrowedBooksData} key={singleBook._id} singleBook={singleBook}></BorrowedBookCard>)
            }
        </div>
        
        </div>
    );
};

export default BorrowedBooks;