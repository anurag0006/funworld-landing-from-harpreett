"use client";
import axios from "axios";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import { AiOutlineCamera, AiOutlineClose } from "react-icons/ai";
import { QrReader } from "react-qr-reader";

const Scan = () => {
  const [data, setData] = useState("No result");
  const [isCameraOpen, setCameraOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

    useEffect(() => {
        let token = window.localStorage.getItem('funworldLogin')
        if (token) {
            const token1 = JSON.parse(token)
            let { email, password } = jwt.decode(token1)
            if (email && password) {
                axios.post("http://localhost:8000/api/auth/admin", {
                    email: email,
                    password: password
                }).then(res => {
                    if (res.data.admin) {
                        setIsAdminLoggedIn(true);
                    }
                })
            }
            setIsAdminLoggedIn(true)
        }
    }, [])

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    verifyCredentials(email, password);
  };

    const verifyCredentials = async (email, password) => {
        try {
            const res = await axios.post("http://localhost:8000/api/auth/admin", {
                email: email,
                password: password
            });
            if (res.data.admin) {
                setIsAdminLoggedIn(true);
                let token = jwt.sign({ email: email, password: password }, "FUNWORLD")
                window.localStorage.setItem("funworldLogin", JSON.stringify(token))
            }
        } catch (e) {
            // console.log(e);
            window.alert(e);
        }
    }

  const handleCameraClick = () => {
    setCameraOpen(true);
  };

    const handleScanResult = async (result, error) => {
        if (!!result) {
            setData(result?.text);
            // // console.log(result?.text)
            let qrcode = result?.text
            let soldTicketId = qrcode.split(' ')[0]
            let ticketId = qrcode.split(' ')[1]
            let res = await axios.get(`http://localhost:8000/api/soldtickets?id=${soldTicketId}`)

            if (!(res.data.status)) {
                alert("No such Ticket")
                return
            }
            let tickets = res.data.message.tickets

            for (let i = 0; i < tickets.length; i++) {
                if (tickets[i]._id == ticketId) {
                    if (tickets[i].checkedIn) {
                        alert("Already checked in")
                        return
                    }
                    let check = confirm(`Child: ${tickets[i].child} Adult: ${tickets[i].adult} Senior: ${tickets[i].senior}`);
                    if (check) {
                        tickets[i].checkedIn = true
                        res = await axios.put(`http://localhost:8000/api/soldtickets?id=${soldTicketId}`, { tickets: tickets });
                    }
                    return
                }
            }
            alert("No such Ticket")
            return
        }

    if (!!error) {
      // console.log(error);
    }
  };

  const handleCameraClose = () => {
    setCameraOpen(false);
  };

  return (
    <>
      {isAdminLoggedIn ? (
        <>
          <div className="min-h-[70vh] flex flex-col items-center justify-center">
            {!isCameraOpen ? (
              <div
                className="border-2 border-blue-950 border-dashed hover:scale-105 transition-all ease-linear delay-150 p-2"
                onClick={handleCameraClick}
              >
                <AiOutlineCamera size={45} />
                <p>{data}</p>
              </div>
            ) : (
              <div className="lg:w-[60%] width-[85%]">
                <div className="flex gap-4 items-center p-2 mt-4">
                  <h2 className="text-lg font-semibold">QR Code Scanner</h2>
                  <button onClick={handleCameraClose}>
                    <AiOutlineClose size={24} />
                  </button>
                </div>
                <QrReader
                  onResult={handleScanResult}
                  style={{ width: "100%" }}
                  constraints={{ facingMode: "environment" }}
                />
                <p>{data}</p>
              </div>
            )}
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

export default Scan;
