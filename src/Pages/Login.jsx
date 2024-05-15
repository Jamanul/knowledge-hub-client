import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../FirebaseAuth/AuthProvider';
import { toast } from 'react-toastify';


const Login = () => {
    const {loginUser,loginUserWithGoogle,user,setLoading,loginUserWithGithub}=useContext(AuthContext)
    const location =useLocation()
    //console.log(location)
    const navigate =useNavigate()
    //console.log(navigate)
    const handleLogin=(e)=>{
        
        e.preventDefault()
        const form=e.target;
        const email=form.email.value
        const password=form.password.value
        loginUser(email,password)
        .then(result=>{
            //console.log(result.user)
            toast.success('Logged in successfully')
            // setLoading(false)
            navigate(location.state || '/')
            
        }) 
        .catch(error=>{
            //console.log(error.message)
            toast.error('User right credentials')
        })
    }
    const handleGithubLogin =()=>{
      loginUserWithGithub()
      .then(result=>{
        toast.success('Logged in successfully')
        //setLoading(false)
        navigate(location.state || '/')
      })
      .catch(error=>{
        //console.log(error.message)
        toast.error('SOMETHING WENT WRONG')
    })
    }
    const handleGoogleLogin=()=>{
      loginUserWithGoogle()
      .then(result=>{
        toast.success('Logged in successfully')
        //setLoading(false)
        navigate(location.state || '/')
      })
      .catch(error=>{
        //console.log(error.message)
        toast.error('SOMETHING WENT WRONG')
    })
    }
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center flex-1  lg:text-left">
        <img className='rounded-3xl' src='https://i.postimg.cc/cJWpj0ZV/42c21514af6645b219178ad6339687bd.jpg'></img>
    </div>
    <div className=" py-[108px] flex-1 border rounded-3xl border-[#E17A2A] w-full max-w-sm "> 
     <h1 className="text-5xl text-center text-[#666666] border-b border-[#E17A2A] pb-2 mx-12 font-bold">Login now!</h1>
      <form onSubmit={handleLogin} className="card-body">
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
      <button onClick={handleGoogleLogin} className="btn bg-[#666666] text-[#fc984c] font-bold">Google</button>
      <button onClick={handleGithubLogin} className="btn bg-[#666666] text-[#fc984c] font-bold">Github</button>
      </div>
      <p className='text-[#666666] text-center mt-4'>Don't have an account? <br /> <span className='text-[#E17A2A] font-bold'><Link to='/registration'>Click here to create an account.</Link></span></p>
    </div>
  </div>
</div>
    );
};

export default Login;