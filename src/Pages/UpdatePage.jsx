import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const UpdatePage = () => {
    const book =useLoaderData()
    const {_id,name,
        image_url,
        quantity,
        author,
        rating,
        short_description,
        long_description,
        category}=book;
    const handleUpdateBook = (e)=>{
        e.preventDefault()
        const form =e.target
        const bookName =form.bookName.value;
        const authorName =form.authorName.value;
        const bookUrl =form.bookUrl.value;
        const bookQuantity =form.bookQuantity.value;
        const bookRating =form.bookRating.value;
        const description =form.shortDescription.value
        const about =form.longDescription.value
        const bookCategory =form.bookCategory.value
        const book ={
            name: bookName,
            image_url: bookUrl,
            quantity :bookQuantity,
            author : authorName,
            rating : bookRating,
            short_description: description,
            long_description : about,
            category: bookCategory
        }
        console.log(book)
        axios.put(`http://localhost:5000/all-books/${_id}`,book)
        .then(data=>{console.log(data.data)
        if(data.data.modifiedCount>0){
          toast.success('you have successfully modified the book.')
        }
        })
    }
    return (
        <div className="min-h-screen">
        <div className="hero-content border border-[#E17A2A] rounded-3xl">
          <div className="w-full">
            <h1 className="text-5xl text-[#666666] border-b pb-2 text-center mx-96 border-[#E17A2A]">
              Update A Book
            </h1>
            <form onSubmit={handleUpdateBook} className="card-body">
              <div className="flex gap-6">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-[#666666]">Book Name</span>
                </label>
                <input
                  type="text"
                  name="bookName"
                  placeholder="Book Name"
                  defaultValue={name}
                  className="input input-bordered border-[#E17A2A] text-[#666666]"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-[#666666]">Author Name</span>
                </label>
                <input
                  type="text"
                  name="authorName"
                  defaultValue={author}
                  placeholder="Author Name"
                  className="input input-bordered border-[#E17A2A] text-[#666666]"
                  required
                />
              </div>
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#666666]">
                    Book Photo Url
                  </span>
                </label>
                <input
                  type="text"
                  name="bookUrl"
                  defaultValue={image_url}
                  placeholder="Book photo Url"
                  className="input input-bordered border-[#E17A2A] text-[#666666]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-[#666666]">
                    Book Quantity
                  </span>
                </label>
                <input
                  type="number"
                  name="bookQuantity"
                  defaultValue={quantity}
                  placeholder="Book Quantity"
                  className="input input-bordered border-[#E17A2A] text-[#666666]"
                  required
                />
              </div>
              <div className="flex gap-6">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text text-[#666666]">
                    Book  Category
                  </span>
                </div>
                <select name='bookCategory' defaultValue={category} className="select text-[#666666] border-[#E17A2A] select-bordered">
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>Novel</option>
                  <option>Thriller</option>
                  <option>History</option>
                  <option>Drama</option>
                  <option>Sci-Fi</option>
                </select>
                <div className="label">
                </div>
              </label>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text text-[#666666]">
                    Book Rating
                  </span>
                </div>
                <select name='bookRating' defaultValue={rating} className="select text-[#666666] border-[#E17A2A] select-bordered">
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <div className="label">
                </div>
              </label>
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#666666]">Description</span>
                </label>
                <input
                  type="text"
                  defaultValue={short_description}
                  name="shortDescription"
                  placeholder="description"
                  className="input input-bordered border-[#E17A2A] text-[#666666]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#666666]">About</span>
                </label>
                <input
                  type="text"
                  defaultValue={long_description}
                  name="longDescription"
                  placeholder="About"
                  className="input input-bordered border-[#E17A2A] text-[#666666]"
                  required
                />
              </div>
            
              <div className="form-control mt-6">
                <button className="btn bg-[#666666] text-[#fc984c] font-bold">
                  Update Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default UpdatePage;