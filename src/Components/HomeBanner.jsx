import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HomeBanner = () => { 
    const [libraryParts,setLibraryParts]=useState([])
    useEffect(()=>{
      fetch('https://knowledge-hub-server-jkskb25-gmailcom-jamanul-sakibs-projects.vercel.app/all-banner')
        .then(res=>res.json())
        .then(data=>setLibraryParts(data))
    },[])
    return (
        <div>
           
  
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        {
        libraryParts.map(data=><SwiperSlide className="rounded-3xl" key={data.id}><div className="relative"><img src={data.image_url} alt="" />
        <div className="absolute top-3/4 left-2/4">
            <p className="text-white md:text-4xl">{data.name}</p>
        </div>
        
        </div></SwiperSlide>)
      }
        
      </Swiper>
    </div> 
        </div>
    );
};

export default HomeBanner;