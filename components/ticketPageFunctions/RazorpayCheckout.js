import axios from "axios";

export const RazorpayCheckout = async ({
  discountPrice,
  coupon,
  checkoutPriceAfterDiscount,
  ticketId,
  bookingDetails,
  setCoupon,
  info,
}) => {
  if (!(discountPrice > 0) && coupon != "") {
    setCoupon("");
    window.alert(
      "It appears that the coupon code you entered is invalid, or you may have forgotten to click the apply button to activate the discount. As a result, the coupon has been discarded. You can reapply the coupon code before proceeding to payment or just click on the proceed to payment button without a coupon code."
    );
    return;
  }
  try {
    // console.log(checkoutPrice);

    const res = await axios.post(
      "https://funworld-backend.vercel.app/api/razorpay/create-order",
      {
        amount: Number(checkoutPriceAfterDiscount * 100),
        name: info.name ? info.name : "",
      }
    );
    if (res.status != 200) {
      alert("Error doing checkout");
      return;
    }
    // console.log(res.data.order);
    const order = res.data.order;

    var options = {
      key: "rzp_live_I288ODVatA9yrx",
      // key: "rzp_test_jXxR67FCNWfnVg", // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Funworld Bangalore", //your business name
      description: "Book Tickets",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      // callback_url: `https://funworld-backend.vercel.app/api/razorpay/paymentverification?id=${ticketId}&price=${checkoutPriceAfterDiscount}&discount=${discountPrice}&coupon_code=${coupon}`,
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: info.name, //your customer's name
        //   "email": user.email,
        //   "contact": billingDetails.mobile  //Provide the customer's phone number for better conversion rates
      },
      notes: {
        info: JSON.stringify(info), // Convert the object to a JSON string
        bookingDetails: JSON.stringify(bookingDetails),
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razorpay = new window.Razorpay(options);
    // console.log(razorpay);
    razorpay.open();
  } catch (error) {
    window.alert("Some Error occurred, Please try again later");
    alert(error.message);
    return;
  }
};
