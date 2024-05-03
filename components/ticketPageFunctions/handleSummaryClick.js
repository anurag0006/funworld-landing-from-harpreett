import axios from "axios";

export const handleSummaryclick = async ({
  info,
  bookingDetails,
  setTicketId,
  setPage,
}) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (info.child + info.adult + info.senior === 0) {
    window.alert(
      "Please add some tickets and your details before moving to the summary page."
    );
    return;
  } else if (
    bookingDetails.name.length < 4 ||
    bookingDetails.name.length > 23
  ) {
    window.alert("Please add a valid name");
    return;
  } else if (bookingDetails.number.length != 10) {
    window.alert("Please add a valid 10 digit mobile number");
    return;
  } else if (!emailPattern.test(bookingDetails.email)) {
    window.alert("Please add a valid email address");
    return;
  }

  try {
    const res = await axios.post(
      "https://funworld-backend.vercel.app/api/soldtickets",
      {
        userDetails: bookingDetails,
        bookingInfo: info,
      }
    );
    if (res.data.status) {
      setTicketId(res.data.message._id);
      setPage(2);
    } else {
      window.alert("Some Error occured please try again later");
      setPage(1);
    }
  } catch (err) {
    window.alert("Some Error occured please try again later");
    console.log(err);
    setPage(1);
  }
};
