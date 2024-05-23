import React, { useEffect, useState } from 'react';
import { fetch_train_from_date } from '../utils/data';
import Footer from "./Footer"
import toast from 'react-hot-toast';

function GetTrainInformation(props) {
    const [trainFrom,setTrainFrom] = useState("")
    const [trainTo,setTrainTo] = useState("");
    const [date,setDate] = useState(null);
    const [trainDetails,setTrainDetails] = useState();

    const formatDate = (date) => {
        if (!date) return ''; // Return empty string if no date is selected
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };

      useEffect(()=>{
        console.log("Date: ",date)
      },[date])

    const handleBuyCourse = async () => {
            console.log("A: ",date)
            const response = await fetch_train_from_date(trainFrom,trainTo,date);
            // const data = await response.json();
            console.log("Response1:",response)
            setTrainDetails(response)
      };
    return (
        
        <div className='w-full'>
            <div className='w-full px-36'>
                {/* <form  className='flex drop-shadow-md'> */}
                    <div className='flex'>
                    <input type="text" onChange={(e)=>{
                        setTrainFrom(e.target.value)
                        console.log(e.target.value)
                    }} className='w-full px-4 py-[1rem] border rounded-2xl rounded-r-none' placeholder='Enter To (Station Code)' />
                    <input type="text" onChange={(e)=>{
                        setTrainTo(e.target.value)
                        console.log(e.target.value)
                    }} className='w-full px-4 py-[1rem] border rounded-2xl rounded-l-none rounded-r-none' placeholder='Enter From (Station Code)' />
                    <input onChange={(e)=>{
                        const selectedDate = new Date(e.target.value);
                        const date_formatted = formatDate(selectedDate);
                        setDate(date_formatted)
                        console.log(date_formatted)
                    }} type="date" name="" id="" className='w-full px-4 py-[1rem] border rounded-2xl rounded-l-none rounded-r-none' placeholder='Enter Train Number' />
                    
                    <button onClick={()=>{handleBuyCourse()}} className='bg-[#0578FF] hover:bg-[#006ce8] transition-all ease-in duration-200 text-white font-semibold text-lg px-5 rounded-r-2xl'>Search</button>
                    </div>
                {/* </form> */}
                <div>
                    <div className='grid lg:grid-cols-4 grid-cols-2 gap-6 mt-14'>
                        
                        {
                            trainDetails?.map((train,index)=>{
                                return (
                                    <div key={index} className='bg-white px-10  py-6 hover:scale-105 transition-all ease-in duration-200 text-left shadow-xl border rounded-2xl'>
                                    <p className='text-blue-600 font-semibold'>Train Name: <span className='text-black font-normal'>{train?.train_base.train_name}</span></p>
                                    <p className='text-blue-600 font-semibold'>Train Number: <span className='text-black font-normal'>{train?.train_base.train_no}</span></p>
                                    <p className='text-blue-600 font-semibold'>Duration: <span className='text-black font-normal'>{train?.train_base.travel_time}</span></p>
                                    <p className='text-blue-600 font-semibold'>Start's From: <span className='text-black font-normal'>{train?.train_base.source_stn_name}</span></p>
                                    </div>
                                )
                            })
                        }
                        <div className='bg-white invisible w-[15rem] px-10 h-[8rem] py-6 hover:scale-105 transition-all ease-in duration-200 text-center shadow-xl border rounded-2xl'>
                            
                            </div>
                    </div>
                </div>
            </div>
            <div className='mt-60'>
                {/* <Footer/> */}
            </div>
        </div>
    );
}

export default GetTrainInformation;