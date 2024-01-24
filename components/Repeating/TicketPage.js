import React, { useEffect, useRef } from 'react'
import { QRCodeCanvas } from 'qrcode.react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import emailjs from "@emailjs/browser";

const TicketPage = ({id, child, adult, senior, name, date, number, email, price, discount, coupon_used}) => {
  const pdfRef = useRef();
  const downloadPdf = async () => {
    const inpt = pdfRef.current;
    html2canvas(inpt).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true)
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
      pdf.addImage(imgData, 'PNG', 0, 10, imgWidth * ratio, imgHeight * ratio);
      var base64 = canvas.toDataURL('image/jpeg', 0.01)
      console.log(base64)
      emailjs.send("service_giwq3bu","template_o83jobh",{
        name: name,
        date: date,
        email: email,
        content:base64
        },"zBhJl0ffrgeu4XvKj")
        .then(function (response) {
          console.log('Email with attachment sent:', response);
          alert(`Your ticket has been downloaded and sent to ${email}.`)
        })
        .catch(function (error) {
          console.error('Email sending failed:', error);
        });
      pdf.save(`Funworld-${date}`);
    })
  }

  useEffect(() => {
    downloadPdf()
  }, [])

  return (
    <div className='font-dm-sans h-fit w-fit px-10' ref={pdfRef}>
      <img src={'/FunworldLogo.jpg'} width={400} height={400} />
      <div className='text-4xl font-dm-sans my-2 font-medium' >Ticket</div>
      <div className='flex flex-row p-10 items-center space-x-40'>

          <div>
            <div className='text-lg font-dm-sans mb-1'>Ticket Holder: {name}</div>
            <div className='text-lg font-dm-sans mb-1'>Phone: {number}</div>
            <div className='text-lg font-dm-sans mb-1'>Email: {email}</div>
            <div className='text-lg font-dm-sans mb-1'>Visit Date: {date}</div>
            <div className='text-lg font-dm-sans mb-1'>Child: {child}</div>
            <div className='text-lg font-dm-sans mb-1'>Adult: {adult}</div>
            <div className='text-lg font-dm-sans mb-1'>Senior: {senior}</div>
            <div className='text-lg font-dm-sans mb-1 font-semibold'>Total Price: {price}</div>
            <div className='text-lg font-dm-sans mb-1 font-semibold'>Amount Saved: {discount}</div>
            <div className='text-lg font-dm-sans mb-1 font-semibold'>Coupon: {coupon_used}</div>
          </div>
          <div>
          <QRCodeCanvas value={id} />
        </div>
      </div>
      <div className='my-4 space-y-3'>
        <div className='font-dm-sans text-lg'>Location: Fun World Amusement Park, Bangalore</div>
        <div className='font-dm-sans text-lg'>Directions: Opp Doordarshan TV Tower, JC Nagar.</div>
      </div>
      <hr />
      <div className='my-5'>
        <div className='text-2xl font-dm-sans font-normal' >Terms & Conditions:</div>
        <div className='p-10 font-dm-sans'>
          <ul className='font-dm-sans list-disc'>
            <li className='font-dm-sans mb-4 text-lg'>Child Ticket is not applicable for children below 80 cms. Child Ticket is applicable only for <br /> children between 80 cms 140 cms of height only.</li>
            <li className='font-dm-sans mb-4 text-lg'>No Refunds | No Cancellations | No Exchanges | No Date Extensions under any circumstances</li>
            <li className='font-dm-sans mb-4 text-lg'>Timings due to Covid Restrictions are Funworld (10:30 Am - 7:00 Pm) and<br /> Waterworld (10:30 Am - 5:00 Pm)</li>
            <li className='font-dm-sans mb-4 text-lg'>All Government and Public Holidays Weekend Ticket Prices applicable.</li>
            <li className='font-dm-sans mb-4 text-lg'>STUDENT Discount if used, Must Carry a Valid Student ID Card for <br /> verification. Valid only for School & College Students.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TicketPage
