import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SubCategory = () => {
    const [categoryData,setCategoryData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/all-category')
        .then(res=>res.json())
        .then(data=>setCategoryData(data))
    },[])
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl text-[#666666]">
          Books By {" "}
          <span
            className="text-[#E17A2A]"
          >
            Category
          </span>
        </h1>
        <h2 className="mt-6 text-xl text-[#666666]">Discover books by the liking of your choice.</h2>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            categoryData.map(singleCategory=><div key={singleCategory._id} className="card w-96 shadow-xl">
            <div className='flex flex-col'>
                
            <figure className='p-4 w-96 h-[500px] flex-grow'><img src={singleCategory.image} alt="Shoes" /></figure>
              
            <div className="card-body flex-grow">
              <h2 className="card-title text-3xl text-[#666666]">{singleCategory.category}</h2>
              <div className="card-actions justify-end">
              <button className="btn bg-[#666666] text-[#fc984c] font-bold"><Link to={`/category-page/${singleCategory.category}`}>View Books</Link></button>
              </div>
            </div>
            </div>
            
          </div>)
        }
      </div>
    </div>
  );
};

export default SubCategory;
