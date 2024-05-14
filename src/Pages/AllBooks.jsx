import { createContext, useEffect, useState } from "react";
import { CiViewList } from "react-icons/ci";
import { FaBoxes } from "react-icons/fa";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AllBooks = () => {
    const [bookData,setBookData]=useState([])
    const [filteredBooks,setFilteredBooks] =useState([])
    const axiosSecure =useAxiosSecure()
    useEffect(()=>{
        const url ='/all-books-test'
        // fetch('https://knowledge-hub-server-jkskb25-gmailcom-jamanul-sakibs-projects.vercel.app/all-books')
        // .then(res=>res.json())
        // .then(data=>{setBookData(data)
        // setFilteredBooks(data)
        axiosSecure.get(url)
        .then(res=>{setBookData(res.data)
          setFilteredBooks(res.data)
        })
    },[axiosSecure])
    const handleFilter =(data)=>{
        if(data === 'all'){
            setFilteredBooks(bookData)
            //console.log('all')
        }
        if(data === 'available'){
            const availableBooks = bookData.filter(singleData=>singleData.quantity!==0)
            setFilteredBooks(availableBooks)
            //console.log('available')
        }
    }
    //console.log(bookData)
  return (
    <div>
      <h1 className="text-5xl text-[#666666] border-b pb-2 text-center mx-96 border-[#E17A2A]">
        View AllBooks Books
      </h1>
      <div className="flex justify-between mt-12 mb-6">
        <div>
        <details className="dropdown ">
        <summary className="m-1 btn text-[#E17A2A] bg-[#666666] ">See Available books</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li>
        <button onClick={()=>handleFilter('all')} className="btn text-[#666666]">All books</button>
          </li>
          <li>
          <button onClick={()=>handleFilter('available')} className="btn text-[#666666]">Available Books</button>
          </li>
        </ul>
      </details></div>
        <div>
          <button className="btn text-3xl mr-2">
            <Link to="/all-books">
              <CiViewList></CiViewList>
            </Link>
          </button>
          <button className="btn text-3xl">
            <Link to="/all-books/card-view">
              <FaBoxes></FaBoxes>
            </Link>
          </button>
        </div>
      </div>
      <Outlet context={[filteredBooks]}></Outlet>
    </div>
  );
};

export default AllBooks;
