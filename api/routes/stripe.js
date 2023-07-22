const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);




router.post('/payment', async (req, res) => {
    try {
      const { tokenId, amount } = req.body;
  
      const paymentIntent = await stripe.paymentIntents.create({
        payment_method: tokenId,
        amount: amount,
        currency: 'usd',
        confirmation_method: 'manual',
      });
  
      // If the payment is successful, confirm the payment
      await stripe.paymentIntents.confirm(paymentIntent.id);
      // If successful, return success status
      res.status(200).json({ status: 'success', message: 'Payment successful.' });
    } catch (error) {
      // Handle payment error

      res.status(500).json({ status: 'error', message: error.message });
    }
  });



module.exports = router;



// router.post('/payment', (req, res) => {
//     stripe.charges.create({
//         source: req.body.tokenId,
//         amount: req.body.amount,
//         currency: 'usd',
//     }, (stripeErr, stripeRes) => {
//         if(stripeErr){
//             res.status(500).json(stripeErr);
//         } else {
//             res.status(200).json(stripeRes);
//         }
//     })
// })