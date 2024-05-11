import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className=" min-h-screen flex flex-col gap-6 justify-center items-center">
            <h2 className="text-5xl text-[#666666]">Error 404</h2>
            <button className="btn bg-[#666666] text-[#fc984c] font-bold"><Link to='/'>Go Back to home</Link></button>
        </div>
    );
};

export default ErrorPage;