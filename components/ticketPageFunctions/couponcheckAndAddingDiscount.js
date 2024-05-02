export const checkCouponAndAddingDiscount = async ({
  coupon,
  checkoutPrice,
  setDiscountPrice,
  setCheckoutPriceAfterDiscount,
  setDiscountApplied,
}) => {
  if (checkoutPrice < 999) {
    window.alert("Please add more items in the cart to avail the discount");
    return;
  }
  if (
    coupon === "10SUMMEROFF" ||
    coupon === "20GOVTOFF" ||
    coupon === "30STUDENTOFF" ||
    coupon === "testing12345"
  ) {
    try {
      // const res = await axios.post(
      //   "http://localhost:8000/api/coupon/verifycouponcode",
      //   {
      //     couponCode: code, // Fix the variable name here from coupon to code
      //   }
      // );

      let discount = 0;

      if (coupon === "10SUMMEROFF") {
        discount = 0.1;
      } else if (coupon === "20GOVTOFF") {
        discount = 0.2;
      } else if (coupon === "30STUDENTOFF") {
        discount = 0.3;
      } else if (coupon === "testing12345") {
        discount = 0.999;
      }
      let roundedDiscount = Math.round(checkoutPrice * discount);
      const newCheckoutPrice = checkoutPrice - roundedDiscount;
      setDiscountPrice(roundedDiscount);
      setCheckoutPriceAfterDiscount(newCheckoutPrice);
      setDiscountApplied(true);
    } catch (e) {
      window.alert("Some error occured, please try again");
    }
  } else {
    window.alert("Please add a valid coupon code from the above given coupons");
    return;
  }
};
