import React from 'react'


import {loadStripe} from '@stripe/stripe-js'
import {Elements, CardElement} from '@stripe/react-stripe-js'

const stripePromise = loadStripe('pk_test_51Mz8smBpiSKIgbTDvFgo62kE2Clbt6yrSsNkfyUd153CeBkyaIBaHGSXcXwyylaAnijSwJ7K0MZ3AoDxS1ECp3tO00v3KSdSCP')

const CheckoutForm=()=> {
  return (

  <Elements stripe={stripePromise}>
    <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1"/>
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>

    <CardElement/>
    <button type="submit" class="btn btn-primary">Submit</button>

    
  </form>
  </Elements>
  )
}


export default CheckoutForm