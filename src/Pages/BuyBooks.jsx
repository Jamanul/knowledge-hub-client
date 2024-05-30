import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const BuyBooks = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl text-[#666666]">
          Payment for your <span className="text-[#E17A2A]">Books</span>
        </h1>
        <h2 className="mt-6 text-xl text-[#666666]">
          Pay to buy the books you have borrowed.
        </h2>
        
      </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default BuyBooks;
