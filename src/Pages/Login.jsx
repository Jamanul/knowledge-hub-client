import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center flex-1  lg:text-left">
        <img className='rounded-3xl' src='https://i.postimg.cc/cJWpj0ZV/42c21514af6645b219178ad6339687bd.jpg'></img>
    </div>
    <div className=" py-[108px] flex-1 border rounded-3xl border-[#E17A2A] w-full max-w-sm "> 
     <h1 className="text-5xl text-center text-[#666666] border-b border-[#E17A2A] pb-2 mx-12 font-bold">Login now!</h1>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[#666666]">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered text-[#666666]" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[#666666]">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered text-[#666666]" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#666666] text-[#fc984c] font-bold">Login</button>
        </div>
      </form>
      <div className='flex mx-8 justify-between'>
      <button className="btn bg-[#666666] text-[#fc984c] font-bold">Google</button>
      <button className="btn bg-[#666666] text-[#fc984c] font-bold">Github</button>
      </div>
      <p className='text-[#666666] text-center mt-4'>Don't have an account? <br /> <span className='text-[#E17A2A] font-bold'><Link to='/registration'>Click here to create an account.</Link></span></p>
    </div>
  </div>
</div>
    );
};

export default Login;