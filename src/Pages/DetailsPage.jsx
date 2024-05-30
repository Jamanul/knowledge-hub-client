import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

import '@smastrom/react-rating/style.css'
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../FirebaseAuth/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import BorrowedBookCard from "../Components/BorrowedBookCard";

const DetailsPage = () => {
    
    const {user} =useContext(AuthContext)
    const singleBook =useLoaderData()
    let {_id,name,
        image_url,
        quantity,
        author,
        rating,
        short_description,
        long_description,
        category,price} =singleBook
        const [bookQuantity,setBookQuantity]=useState(quantity)
        const handleBorrowBooks =(e)=>{
            e.preventDefault()
            const form =e.target
            const userName =form.userName.value
            const email =form.email.value
            const borrowedDate=form.borrowedDate.value
            const returnDate =form.returnDate.value
            const borrowedBook={
                userName,
                email,
                returnDate,
                name,
                image_url,
                quantity,
                author,
                rating,
                short_description,
                long_description,
                category,
                borrowedDate,
                price
            }
            //console.log(borrowedBook)
            axios.post('https://knowledge-hub-server-rho.vercel.app/all-borrowed-books',borrowedBook)
            .then(
                //console.log(data.data)
            )
            axios.patch(`https://knowledge-hub-server-rho.vercel.app/all-returned-books/${_id}`,borrowedBook)
            .then(data=>{
                //console.log(data.data)
                
            if(data.data.modifiedCount){
                toast.success('You have borrowed a book.')
                setBookQuantity(bookQuantity-1)
            }
            else{
                toast.error('you already have borrowed the book.')}
            
            })
            //toast.success("You have borrowed a book.")
        }
        
    return (
        <div>
            <div className="flex gap-6 flex-col lg:flex-row">
                <div className="border border-[#E17A2A] rounded-3xl flex-1">
                    <img className="p-6" src={image_url} alt="" />
                </div>
                <div className="border p-6 border-[#E17A2A] rounded-3xl flex-1 space-y-4">
                <h2 className='text-xl text-[#E17A2A]'><span className='text-3xl text-[#666666]'>Book Name: </span>{name}</h2>
                <h2 className='text-xl text-[#E17A2A]'><span className='text-2xl text-[#666666]'>Description: </span>{short_description}</h2>
                <h2 className='text-xl text-[#E17A2A]'><span className='text-2xl text-[#666666]'>Author: </span>{author}</h2>
                <h2 className='text-xl text-[#E17A2A]'><span className='text-2xl text-[#666666]'>Category: </span>{category}</h2>
                <h2 className='text-[#666666] text-xl flex gap-4'><span className='text-2xl'>Rating: </span>  <Rating style={{ maxWidth: 100 }} value={rating} readOnly /></h2>
                <h2 className='text-[#E17A2A]'><span className='text-2xl text-[#666666]'>About: </span>{long_description}</h2>


                <div className="flex justify-between">
                    <div>
                    <h2 className='text-[#E17A2A] text-xl'><span className='text-2xl text-[#666666]'>Available Books: </span>{bookQuantity}</h2>
                    </div>
                    <button className={`${bookQuantity>0? '':'btn-disabled'} btn bg-[#666666] text-[#fc984c] font-bold`} onClick={()=>document.getElementById('my_modal_2').showModal()}>Borrow Book</button>
                    <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                    <form onSubmit={handleBorrowBooks} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#666666]">User Name</span>
                        </label>
                        <input type="text" name='userName' defaultValue={user?.displayName} placeholder="User Name" className="input input-bordered text-[#666666]" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#666666]">Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered text-[#666666]" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#666666]">Borrowed Date</span>
                        </label>
                        <input type="date" name='borrowedDate' placeholder="Borrowed Date" className="input input-bordered text-[#666666]" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#666666]">Return Date</span>
                        </label>
                        <input type="date" name='returnDate' placeholder="Return Date" className="input input-bordered text-[#666666]" required />
                        </div>
                        <div className="form-control mt-6 modal-action">
                        <button className="btn bg-[#666666] text-[#fc984c] font-bold">submit</button>
                        </div>
                    </form>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                    </form>
                    </dialog>
                </div>
                   { }
                </div>
            </div>
   
        </div>
    );
};

export default DetailsPage;