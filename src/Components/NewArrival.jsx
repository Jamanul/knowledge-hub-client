import { useEffect, useState } from "react";

const NewArrival = () => {
    const [newBooks,setNewBooks]=useState([])
    useEffect(()=>{
        fetch('https://knowledge-hub-server-jkskb25-gmailcom-jamanul-sakibs-projects.vercel.app/new-arrival')
          .then(res=>res.json())
          .then(data=>setNewBooks(data))
      },[])
    return (
        <div>
            <div className="text-center">
        <h1 className="text-4xl text-[#666666]">
          New {" "}
          <span
            className="text-[#E17A2A]"
          >
            Arrivals
          </span>
        </h1>
        <h2 className="mt-6 text-xl text-[#666666]">Explore the new best selling books.</h2>
      </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                newBooks.map(singlePart=><div key={singlePart._id} className="card w-96 shadow-xl">
                <div className='flex flex-col'>  
                <figure className='p-4 w-96 flex-grow'><img src={singlePart.image} alt="Shoes" /></figure>
                   <h2 className="text-center text-3xl text-[#E17A2A]">{singlePart.name}</h2>
                <div className="card-body flex-grow">
                    <p className="text-center text-[#666666]">{singlePart.description}</p>
                </div>
                </div>
              </div>)
            }
        </div>
        </div>
    );
};

export default NewArrival;