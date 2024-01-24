"use client";
import TicketPage from "@/components/Repeating/TicketPage";
import axios from "axios";
import { useEffect, useState } from "react";

const Success = ({ params }) => {
    const [ticket, setTicket] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/soldtickets?id=${params.id}`).then((res) => {
            setTicket(res.data.message);
            // console.log(res.data.message);
            window.localStorage.setItem('cart', JSON.stringify([]))
            // console.log(res.data.message)
        }).catch(err => {
            // console.log(err)
        })
    }, [])
    return (
        <div>
            <div className='flex flex-col space-y-3 my-10'>
                {ticket.tickets && (ticket.tickets).map((t, ind) => {
                    return (
                        <>
                            <TicketPage key={ind} id={params.id + " " + t._id} child={t.child} adult={t.adult} senior={t.senior} date={t.visitDate} name={ticket.name} number={ticket.number} email={ticket.email} price={ticket.price} discount={ticket.discount} coupon_used={ticket.coupon_used}/>
                            <hr />
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Success;
