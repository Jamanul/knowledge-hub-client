import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../FirebaseAuth/AuthProvider';
import { toast } from 'react-toastify';

const Registration = () => {
    const {registerUser,updateUser,loading,user,setUser}=useContext(AuthContext)
    const handleRegister =(e)=>{
        e.preventDefault()
        const form =e.target;
        const name =form.yourName.value;
        const email =form.email.value;
        const photoUrl=form.photoUrl.value;
        const password=form.password.value;
        if(password.length<6){
            return toast.error('password must be 6 characters long.')
        }
        if(!/^(?=.*[$&+,:;=?@#|'<>.^*()%!-]).{6,}$/.test(password)){
            return toast.error('password must contain on uppercase letter and a special character')
        }
        if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()-_+=?]).{6,}$/.test(password)){
            return toast.error('password must contain on uppercase letter and a special character')
        }
       
        registerUser(email,password,name,photoUrl)
        .then(result=>{
            console.log(result.user)
            
            updateUser(name,photoUrl)
            setUser({...user,displayName:name,photoURL:photoUrl})
           
             
              toast.success("Account created successfully.")
            
        })
        .catch(error=>{
            console.log(error)
            toast.error('Something went wrong')
        })
    }
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center flex-1  lg:text-left">
              <img className='rounded-3xl' src='https://i.postimg.cc/cJWpj0ZV/42c21514af6645b219178ad6339687bd.jpg'></img>
          </div>
          <div className=" py-[70px] flex-1 border rounded-3xl border-[#E17A2A] w-full max-w-sm "> 
           <h1 className="text-5xl text-center text-[#666666] border-b border-[#E17A2A] pb-2 mx-4 font-bold">Register now!</h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#666666]">Your Name</span>
                </label>
                <input type="text" name='yourName' placeholder="Your name" className="input input-bordered text-[#666666]" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#666666]">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered text-[#666666]" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#666666]">Photo URL</span>
                </label>
                <input type="text" name='photoUrl' placeholder="Photo URL" className="input input-bordered text-[#666666]" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#666666]">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered text-[#666666]" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#666666] text-[#fc984c] font-bold">Register</button>
              </div>
            </form>
            <p className='text-[#666666] text-center'>Already have an account? <span className='text-[#E17A2A] font-bold'><Link to='/login'>Click here to login.</Link></span></p>
          </div>
        </div>
      </div>
    );
};

export default Registration;