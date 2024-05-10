import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const links =<>
      <li> <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#E17A2A] border-b border-[#E17A2A] hover:bg-transparent rounded-none" : "text-[#666666] hover:text-[#E17A2A] hover:bg-transparent"
  } to='/'>Home</NavLink></li> 
      <li> <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#E17A2A] border-b border-[#E17A2A]  hover:bg-transparent rounded-none" : "text-[#666666] hover:text-[#E17A2A] hover:bg-transparent"
  } to='/login'>login</NavLink></li> 
      <li> <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#E17A2A]  border-b border-[#E17A2A] hover:bg-transparent rounded-none" : "text-[#666666] hover:text-[#E17A2A] hover:bg-transparent"
  } to='/registration'>Registration</NavLink></li> 
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 text-[#666666] z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <Link o="/" className="btn btn-ghost text-xl"> <div className="flex items-center justify-center"><img className="w-10 rounded-full" alt="Tailwind CSS Navbar component" src="/Designer.png" /><div className="text-left ml-2">
    <p className="text-[#666666]">Knowledge  <span className="text-[#E17A2A]">Hub</span> </p></div></div></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {links}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 text-[#666666] z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;