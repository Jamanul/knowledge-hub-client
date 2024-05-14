import { useEffect, useState } from "react";


const Libraryparts = () => {
    const [libraryParts,setLibraryParts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/all-banner')
          .then(res=>res.json())
          .then(data=>setLibraryParts(data))
      },[])
    return (
        <div>
            <div className="text-center">
        <h1 className="text-4xl text-[#666666]">
          Parts of our {" "}
          <span
            className="text-[#E17A2A]"
          >
            Library
          </span>
        </h1>
        <h2 className="mt-6 text-xl text-[#666666]">Explore the different parts of our library.</h2>
      </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                libraryParts.map(singlePart=><div key={singlePart._id} className="card w-96 shadow-xl">
                <div className='flex flex-col'>  
                <figure className='p-4 w-96 flex-grow'><img src={singlePart.image_url} alt="Shoes" /></figure>
                   <h2 className="text-center text-3xl text-[#666666]">{singlePart.name}</h2>
                <div className="card-body flex-grow">
                </div>
                </div>
              </div>)
            }
        </div>
        </div>
    );
};

export default Libraryparts;