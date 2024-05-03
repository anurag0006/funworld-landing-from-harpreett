"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import Image from "next/image";
import Link from "next/link";

const Admin = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [search, setSearch] = useState("");
  const [soldTicketsArray, setSoldTicketsArray] = useState();
  const [generalSoldTicketsArray, setGeneralsoldTicketArray] = useState([]);

  useEffect(() => {
    let token = window.localStorage.getItem("funworldLogin");
    if (token) {
      const token1 = JSON.parse(token);
      let { email, password } = jwt.decode(token1);
      if (email && password) {
        axios
          .post("https://funworld-backend.vercel.app/api/auth/admin", {
            email: email,
            password: password,
          })
          .then((res) => {
            if (res.data.admin) {
              setIsAdminLoggedIn(true);
            }
          });
      }
      setIsAdminLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const fetchSoldTickets = async () => {
      if (isAdminLoggedIn) {
        let token = window.localStorage.getItem("funworldLogin");
        try {
          const res = await axios.get(
            "https://funworld-backend.vercel.app/api/soldtickets"
          );
          // console.log(res.data);
          // setSoldTicketsArray(res.data);
          let arr = res.data.sort((a, b) =>
            b.tickets[0].visitDate.localeCompare(a.tickets[0].visitDate)
          );
          setGeneralsoldTicketArray(arr);
          // console.log(arr)
          const filteredArray = arr.filter(
            (item) => item.tickets[0].visitDate === formattedCurrentDate
          );
          setSoldTicketsArray(filteredArray);
        } catch (e) {
          window.alert("Err in fetching sold tickets");
        }
      }
    };
    fetchSoldTickets();
  }, [isAdminLoggedIn]);

  const revenueLastWeek = 200000;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    verifyCredentials(email, password);
  };

  const handleDelete = async (id, index) => {
    let ask = window.confirm("Do you want to delete?");
    if (!ask) return;
    try {
      let token = window.localStorage.getItem("funworldLogin");
      const res = await axios.delete(
        `https://funworld-backend.vercel.app/api/soldtickets?id=${id}`,
        { headers: { token: token } }
      );
      console.log(res);
      let tempArray = [...soldTicketsArray];
      tempArray.splice(index, 1);
      setSoldTicketsArray(tempArray);
      let genTempArray = [];
      for (let i = 0; i < generalSoldTicketsArray.length; i++) {
        if (generalSoldTicketsArray[i]._id == id) continue;
        genTempArray.push(generalSoldTicketsArray[i]);
      }
      setGeneralsoldTicketArray(genTempArray);
    } catch (err) {
      console.log(err);
    }
  };

  const verifyCredentials = async (email, password) => {
    try {
      const res = await axios.post(
        "https://funworld-backend.vercel.app/api/auth/admin",
        {
          email: email,
          password: password,
        }
      );
      if (res.data.admin) {
        setIsAdminLoggedIn(true);
        let token = jwt.sign({ email: email, password: password }, "FUNWORLD");
        window.localStorage.setItem("funworldLogin", JSON.stringify(token));
      }
    } catch (e) {
      // console.log(e);
      window.alert(e);
    }
  };

  const handleCheckedInChange = async (index, soldTicketId, ticketId) => {
    if (!window.confirm("Do you want to change checked-in status?")) return;

    const updatedSoldTicketsArray = [...soldTicketsArray]; // Create a copy of the array
    const ticketToUpdate = updatedSoldTicketsArray[index].tickets[0];
    ticketToUpdate.checkedIn = !ticketToUpdate.checkedIn;

    const updatedGeneralSoldTicketsArray = [...generalSoldTicketsArray]; // Create a copy of the array
    for (let i = 0; i < updatedGeneralSoldTicketsArray.length; i++) {
      if (updatedGeneralSoldTicketsArray._id == soldTicketId) {
        const generalTicketToUpdate =
          updatedGeneralSoldTicketsArray[i].tickets[0];
        generalTicketToUpdate.checkedIn = !generalTicketToUpdate.checkedIn;
      }
    }

    try {
      let token = window.localStorage.getItem("funworldLogin");
      const res = await axios.put(
        `https://funworld-backend.vercel.app/api/soldtickets?id=${soldTicketId}`,
        { tickets: updatedSoldTicketsArray[index].tickets },
        { headers: { token: token } }
      );

      // Assuming the API call was successful, update the state with the updated array
      setSoldTicketsArray(updatedSoldTicketsArray);
      setGeneralsoldTicketArray(updatedGeneralSoldTicketsArray);
      // console.log(res.data, ticketToUpdate);
    } catch (error) {
      console.error("Error updating checked-in status:", error);
    }
  };

  function findDayOfWeek(givenDate) {
    const dateObj = new Date(givenDate);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeek = days[dateObj.getDay()];
    return dayOfWeek;
  }

  //getting the formated today and tomorrow's date:

  const currentDate = new Date();
  const nextDay = new Date(currentDate);
  nextDay.setDate(currentDate.getDate() + 1);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formattedCurrentDate = formatDate(currentDate);
  const formattedNextDay = formatDate(nextDay);

  //selecting different buttons from today, tomorrow , ...

  const [selectedButton, setSelectedButton] = useState("Today");

  const handleButtonClick = (btn) => {
    setSelectedButton(btn);
    if (btn === "Today") {
      // console.log(formattedCurrentDate, generalSoldTicketsArray[0].tickets[0].visitDate)
      const filteredArray = generalSoldTicketsArray.filter(
        (item) => item.tickets[0].visitDate === formattedCurrentDate
      );
      setSoldTicketsArray(filteredArray);
    } else if (btn === "Tomorrow") {
      const filteredArray = generalSoldTicketsArray.filter(
        (item) => item.tickets[0].visitDate === formattedNextDay
      );
      setSoldTicketsArray(filteredArray);
    } else {
      setSoldTicketsArray(generalSoldTicketsArray);
    }
  };

  return (
    <>
      {isAdminLoggedIn ? (
        <>
          <div className="p-4">
            <div className="flex items-center justify-center my-8">
              <h1 className="text-3xl font-semibold mb-4">Admin Panel</h1>
            </div>

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-8">
                <div>
                  <select
                    className="border px-4 py-2 text-xl rounded"
                    value={selectedButton}
                    onChange={(e) => handleButtonClick(e.target.value)}
                  >
                    <option value="Today">Today</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="General">General</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-md"
                    placeholder="Search tickets..."
                    value={search}
                    onInput={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                </div>

                <div className="lg:w-[800px] md:min-w-[200px] flex justify-end">
                  <Link
                    href="/contactformpage"
                    className="px-6 py-3 rounded border hover:scale-105 text-xl transition-all delay-150 text-white font-[500] bg-orange-400"
                  >
                    Queries / Holidays
                  </Link>
                </div>
              </div>

              <div>
                {/* <h2 className="text-xl font-semibold mb-2">Revenue Last Week</h2>
                                <p className="text-lg">${revenueLastWeek}</p> */}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Tickets</h2>
              <table className="w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 border border-gray-300">ID</th>
                    <th className="p-2 border border-gray-300">ticket</th>
                    <th className="p-2 border border-gray-300">payment</th>
                    <th className="p-2 border border-gray-300">coupon</th>
                    <th className="p-2 border border-gray-300">Visit Date </th>
                    <th className="p-2 border border-gray-300">Tickets</th>
                    <th className="p-2 border border-gray-300">Checked In?</th>
                    {/* <th className="p-2 border border-gray-300">Date</th> */}
                  </tr>
                </thead>
                <tbody>
                  {soldTicketsArray &&
                    soldTicketsArray.map(
                      (ticket, index) =>
                        (ticket._id
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                          ticket.name
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          ticket.email
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          ticket.number
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          ticket.tickets[0].visitDate
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          findDayOfWeek(ticket.tickets[0].visitDate)
                            .toLowerCase()
                            .includes(search.toLowerCase())) && (
                          <tr key={index}>
                            <td className="p-1 px-5 border border-gray-300 text-center ">
                              <div className="flex flex-row space-x-6 items-center">
                                <div
                                  className="cursor-pointer"
                                  onClick={async () => {
                                    await handleDelete(ticket._id, index);
                                  }}
                                >
                                  <Image
                                    src={
                                      "https://funworldblr.s3.amazonaws.com/public/delete.jpg"
                                    }
                                    width={30}
                                    height={30}
                                  ></Image>
                                </div>
                                <span className="text-center">
                                  {ticket._id}
                                </span>
                              </div>
                            </td>
                            <td className="p-2 border border-gray-300">
                              {ticket.name}
                              <br /> {ticket.email}
                              <br /> {ticket.number}
                            </td>
                            <td className="p-2 border border-gray-300 text-center">
                              {ticket.payment ? ticket.price : "Not Paid"}
                            </td>
                            <td className="p-2 border border-gray-300 text-center">
                              {ticket.coupon_used}
                            </td>
                            <td className="p-2 border border-gray-300">
                              {ticket.tickets.map((tik, ind) => (
                                <span
                                  key={ind}
                                  className="flex items-center justify-center"
                                >
                                  {tik.visitDate} <br />{" "}
                                  {findDayOfWeek(tik.visitDate)}
                                </span>
                              ))}
                            </td>
                            <td className="p-2 border border-gray-300 text-center">
                              <span>Child: {ticket.tickets[0].child}</span>{" "}
                              <br />
                              <span>Adult: {ticket.tickets[0].adult}</span>{" "}
                              <br />
                              <span>Senior: {ticket.tickets[0].senior}</span>
                            </td>
                            <td className="p-2 border border-gray-300 text-center">
                              <span
                                className={` font-semibold ${
                                  ticket.tickets[0].checkedIn === true
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              >
                                {ticket.payment && (
                                  <span>
                                    {ticket.tickets[0].checkedIn === true
                                      ? "yes"
                                      : "no"}
                                  </span>
                                )}
                              </span>

                              {ticket.payment && (
                                <button
                                  onClick={() =>
                                    handleCheckedInChange(
                                      index,
                                      ticket._id,
                                      ticket.tickets[0]._id
                                    )
                                  }
                                  className="px-2 py-1 bg-blue-600 text-white font-[600] ml-4 rounded hover:scale-105 transition-all delay-150"
                                >
                                  Change
                                </button>
                              )}
                            </td>
                            {/* <td className="p-2 border border-gray-300">date</td> */}
                          </tr>
                        )
                    )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="min-h-[70vh] flex items-center justify-center  px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
              <p className="text-center mb-8 font-bold text-2xl">Admin Login</p>
              <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-4">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-b-md focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 sidebox-css"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Admin;
