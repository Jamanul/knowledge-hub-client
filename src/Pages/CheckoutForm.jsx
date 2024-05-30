import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import axios from 'axios';
import { AuthContext } from '../FirebaseAuth/AuthProvider';
import { toast } from 'react-toastify';

const CheckoutForm = () => {
    const [errorMessage,setErrorMessage]=useState(' ')
    const [clientSecret,setClientSecret]=useState('')
    const [transectionId,setTransectionId]=useState('')
    const {user}= useContext(AuthContext)
    const [borrowedBooksData,setBorrowedBooksData]=useState([])
    const stripe =useStripe()
    const elements =useElements()
    const axiosSecure =useAxiosSecure()
    useEffect(()=>{
        axios.get(`https://knowledge-hub-server-rho.vercel.app/all-borrowed-books?email=${user.email}`)
        .then(data=>setBorrowedBooksData(data.data))
    },[user.email])

    console.log(borrowedBooksData)
    console.log(user)
    const totalPrice= borrowedBooksData.reduce((total,item)=>total+item.price,0)

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent',{price:totalPrice})
        .then(res=>{console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
        })
    },[axiosSecure, totalPrice])

    const handleSubmit=async(event)=>{
        event.preventDefault()
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)

        if (card == null) {
            return;
          }
      
          
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if (error) {
            console.log('error', error);
            setErrorMessage(error.message)
          } else {
            console.log('PaymentMethod', paymentMethod);
            setErrorMessage(' ')
          }
          
          const {paymentIntent,error: err} = await stripe.confirmCardPayment(
            clientSecret,{
                payment_method:{
                    card: card,
                    billing_details:{
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous'
                    }
                }
            }
          )
          if(err){
            console.log('confirm error',)
          }
          else{
            console.log(paymentIntent,"payment intent")
            if(paymentIntent.status === 'succeeded'){
                toast.success('payment done')
                setTransectionId(paymentIntent.id)
                const payment={
                    email:user.email,
                    price: totalPrice,
                    bookId: borrowedBooksData.map(item=>item._id)
                }
                const res = await axiosSecure.post('/payments',payment)
                console.log(res)
            }
          }
    }
    return (
       <form className='mt-6' onSubmit={handleSubmit}>
             <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn bg-[#666666] mt-4 text-[#fc984c] font-bold" type='submit' disabled={!stripe || !clientSecret}>Buy</button>
      <p className='text-red-500'>{errorMessage}</p>
      {transectionId && <p className='text-green-600'>Your transaction id {transectionId}</p>}
       </form>
    );
};

export default CheckoutForm;