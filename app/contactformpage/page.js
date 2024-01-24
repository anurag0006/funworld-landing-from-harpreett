"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import Image from "next/image";

const Admin = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    let token = window.localStorage.getItem("funworldLogin");
    if (token) {
      const token1 = JSON.parse(token);
      let { email, password } = jwt.decode(token1);
      if (email && password) {
        axios
          .post(
            "http://localhost:8000/api/auth/admin",
            {
              email: email,
              password: password,
            }
          )
          .then((res) => {
            if (res.data.admin) {
              setIsAdminLoggedIn(true);
            }
          });
      }
      setIsAdminLoggedIn(true);
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [holiday, setHoliday] = useState("");

  const [allHolidays, setAllHolidays] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    verifyCredentials(email, password);
  };

  const verifyCredentials = async (email, password) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/admin",
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

  const handleAddHoliday = async (e) => {
    e.preventDefault();
    if (!isAdminLoggedIn) return;
    let token = window.localStorage.getItem('funworldLogin')
    const res = await axios.post(
      "http://localhost:8000/api/holidays",
      {
        holiday: holiday,
      },
      {
        headers: {
          token: token
        }
      }
    );
    const sortedHolidays = res.data.message.sort((a, b) => {
      // Assuming holidayDate is in the format that allows direct string comparison
      return a.holidayDate.localeCompare(b.holidayDate);
    });
    setAllHolidays(sortedHolidays);
  };

  const [formSubmissions, setSubmissions] = useState(null);

  useEffect(() => {
    // const fetchQueries = async () => {
      if (!isAdminLoggedIn) return;
      let token = window.localStorage.getItem('funworldLogin')
      axios.get(
        "http://localhost:8000/api/query/",
        {
          headers: {
            token: token
          }
        }
      ).then((res)=>{
        const revArray = res.data.message.slice().reverse();
        setSubmissions(revArray);
      });
    // };

    // const fetchHolidays = async () => {
      // if (!isAdminLoggedIn) return;
      // let token = window.localStorage.getItem('funworldLogin')
      axios.get(
        "http://localhost:8000/api/holidays/",
        {
          headers: {
            token: token
          }
        }
      ).then((res)=>{
        const sortedHolidays = res.data.message.sort((a, b) => {
          // Assuming holidayDate is in the format that allows direct string comparison
          return a.holidayDate.localeCompare(b.holidayDate);
        });
        setAllHolidays(sortedHolidays);
      });
      // console.log(res.data);
    // };

    // fetchQueries();
    // fetchHolidays();
  }, [isAdminLoggedIn]);

  const handleRemoveHoliday = async (id) => {
    console.log(id);

    // Display confirmation dialog
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this Holiday?"
    );

    // Check if the user confirmed
    if (userConfirmed) {
      try {
        if (!isAdminLoggedIn) return;
        let token = window.localStorage.getItem('funworldLogin');
        const res = await axios.delete(
          `http://localhost:8000/api/holidays/${id}`, { headers: { token: token } }
        );

        if (res.data.status) {
          setAllHolidays((prevHolidays) =>
            prevHolidays.filter((holiday) => holiday._id !== id)
          );
        }

        console.log(res.data.status); // Assuming the backend returns a response
      } catch (error) {
        console.error("Error deleting holiday:", error);
        // Handle error accordingly
      }
    } else {
      // User clicked "Cancel", do nothing or handle accordingly
      console.log("Deletion canceled by user");
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

  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <>
      {isAdminLoggedIn ? (
        <>
          <div className="min-h-screen flex ">
            <div className="p-8 w-full flex-[3]">
              <h1 className="text-3xl font-bold mb-6 text-center">
                Contact Form Results
              </h1>
              <div className="space-y-4">
                {formSubmissions &&
                  formSubmissions.map((submission, index) => (
                    <div
                      key={submission._id}
                      className="border p-4 rounded-md shadow-md transition-transform transform hover:scale-105"
                    >
                      <p className="text-lg font-semibold mb-2">
                        {index + 1} - {submission.name}
                      </p>
                      <p className="text-gray-600 mb-2">
                        Email: {submission.email}
                      </p>
                      <p className="text-gray-800">Query: {submission.query}</p>
                      <p className="text-gray-800">
                        Date of Query: {submission.createdAt.substring(0, 10)}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            <div className="flex-1 pt-8 px-4">
              <div className="text-xl font-[500] mb-4">Holidays</div>
              <form
                onSubmit={handleAddHoliday}
                type="submit"
                className="flex gap-4"
              >
                <input
                  required
                  value={holiday}
                  onChange={(e) => setHoliday(e.target.value)}
                  type="date"
                  min={currentDate}
                ></input>
                <button type="submit" className="px-3 py-2 rounded border ">
                  Add
                </button>
              </form>

              <div className="mt-6 flex flex-col gap-4">
                {allHolidays &&
                  allHolidays.map((day) => (
                    <div className="flex gap-4 items-center" key={day._id}>
                      <span>{day.holidayDate}</span>
                      <span>{findDayOfWeek(day.holidayDate)}</span>
                      <button
                        className="px-2 py-2 rounded-sm border"
                        onClick={() => handleRemoveHoliday(day._id)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
              </div>
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
