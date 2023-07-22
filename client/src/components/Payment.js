import { useEffect, useState } from "react";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios'

export const Payment = () =>  {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const getPublishableKey = async () => {
        try {
            await axios.get("http://localhost:3001/api/checkout/config")
                        .then(async (res) => {
                            const { publishableKey } = await res.data;
                            setStripePromise(loadStripe(publishableKey));
                        })
            } catch (error) {
            console.log(error);
        }
    }
    getPublishableKey();
  }, []);

  useEffect(() => {
    const getClientSecret = async () => {
        try {
            await axios.post("http://localhost:3001/api/checkout/payment")
                        .then(async (res) => {
                            const { clientSecret } = await res.data;
                            setClientSecret(clientSecret);
                        })
            } catch (error) {
            console.log(error);
        }
    }
    getClientSecret();
  }, []);

  return (
    <>
    <h1>Payment</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}
