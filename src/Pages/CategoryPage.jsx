import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookCard from '../Components/BookCard';

const CategoryPage = () => {
    const [categoryData,setCategoryData]=useState([])
    const category= useParams()
    //console.log(category.id)
    useEffect(()=>{
        fetch(`https://knowledge-hub-server-rho.vercel.app/all-books?category=${category.id}`)
        .then(res=>res.json())
        .then(data=>setCategoryData(data))
    },[category.id])
    //console.log(categoryData)
    return (
       <div>
         <div className="text-center">
        <h1 className="text-4xl text-[#666666] mb-6">
          Books of {" "}
          <span
            className="text-[#E17A2A]"
          >
            {category.id}
          </span>
        </h1>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categoryData.map(singleBook=>
            <BookCard key={singleBook._id} singleBook={singleBook}></BookCard>
        )}

      </div>
       </div>
    );
};

export default CategoryPage;