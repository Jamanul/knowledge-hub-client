import { CiViewList } from "react-icons/ci";
import { FaBoxes } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
const AllBooks = () => {
    return (
        <div>
             <h1 className="text-5xl text-[#666666] border-b pb-2 text-center mx-96 border-[#E17A2A]">
            View AllBooks Books
        </h1>
        <div className="flex justify-between mt-12 mb-6">
            <div>
                sort
            </div>
            <div>
                <button className="btn text-3xl mr-2"><Link to='/all-books/row-view'><CiViewList></CiViewList></Link></button>
                <button className="btn text-3xl"><Link to='/all-books/card-view'><FaBoxes></FaBoxes></Link></button>
            </div>
        </div>
        <Outlet></Outlet>
        </div>
       

    );
};

export default AllBooks;