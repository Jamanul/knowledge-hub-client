import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../FirebaseAuth/AuthProvider";
import { PiUserCircleGearBold } from "react-icons/pi";

const Navbar = () => {
  const {user,loading,logoutUser}=useContext(AuthContext)
  const handleLogout =()=>{
      logoutUser()
  }
  const links = (
    <>
      <li>
        {" "}
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#E17A2A] border-b border-[#E17A2A] hover:bg-transparent rounded-none"
              : "text-[#666666] hover:text-[#E17A2A] hover:bg-transparent"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li>
        {" "}
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#E17A2A]  border-b border-[#E17A2A] hover:bg-transparent rounded-none"
              : "text-[#666666] hover:text-[#E17A2A] hover:bg-transparent"
          }
          to="/all-books"
        >
          All Books
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#E17A2A]  border-b border-[#E17A2A] hover:bg-transparent rounded-none"
              : "text-[#666666] hover:text-[#E17A2A] hover:bg-transparent"
          }
          to="/add-books"
        >
          Add Books
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#E17A2A]  border-b border-[#E17A2A] hover:bg-transparent rounded-none"
              : "text-[#666666] hover:text-[#E17A2A] hover:bg-transparent"
          }
          to="/borrowed-books"
        >
          Borrowed Books
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#E17A2A] border-b border-[#E17A2A]  hover:bg-transparent rounded-none"
              : "text-[#666666] hover:text-[#E17A2A] hover:bg-transparent"
          }
          to="/login"
        >
          Login
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 text-[#666666] z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link o="/" className="btn btn-ghost text-xl">
          {" "}
          <div className="flex items-center justify-center">
            <img
              className="w-10 rounded-full"
              alt="Tailwind CSS Navbar component"
              src="/Designer.png"
            />
            <div className="text-left ml-2">
              <p className="text-[#666666]">
                Knowledge <span className="text-[#E17A2A]">Hub</span>{" "}
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user ?<img
                alt="Tailwind CSS Navbar component"
                src={ user?.photoURL}
              /> : <PiUserCircleGearBold className="text-4xl"/>}
              
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 text-[#666666] z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <p className="text-[#666666] hover:text-[#E17A2A] hover:bg-transparent">{user? user.displayName : 'Your Name'}</p>
            </li>
           
            <li>
              <p className="text-[#666666] hover:text-[#E17A2A] hover:bg-transparent" onClick={handleLogout}>Log Out</p>
            </li>
          </ul>
        </div>
      
      </div>
    </div>
  );
};

export default Navbar;
