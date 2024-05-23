import React, { useEffect, useState } from 'react';
import { fetchTrainDetails } from '../utils/data';
import Footer from './Footer';

function GetRoute(props) {
    const [trainNumber,setTrainNumber] = useState()
    const [trainDetails,setTrainDetails] = useState();
    
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    // const apiUrl = 'https://indian-railway-api.cyclic.app/trains/getTrain/?trainNo=15205';
    
    
    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     try {
    //         const response = await fetch(apiUrl)
           
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         const data = await response.json();
    //         setTrainDetails(data);
    //         console.log(data)
    //     } catch (error) {
    //         console.error('Error fetching train details:', error);
    //     }
    // }
    const [visible,setVisible] = useState(false);
    const handleBuyCourse = async () => {
        /*
          handleBuyCourse is used to handle the payment modal
          and also updated course and student details
        */
        
          console.log(trainNumber.toString())
          const trainNo = trainNumber.toString();
            const response = await fetchTrainDetails(trainNo);
            // const data = await response.json();
            // console.log("Response1:",response)
            if(response)
            setVisible(true);
            setTrainDetails(response)
        /*
          If the user is not logged in then we will show and confirmation modal
          to navigate the user to login
        */
        
      };
      useEffect(()=>{
        // setVisible(false);
      },[])
    return (
        <div className='w-full'>
            <div className='w-full px-36 mb-40'>
                {/* <form  className='flex drop-shadow-md'> */}
                    <div className='flex'>
                        <input type="text" onChange={(e)=>{
                            setTrainNumber(e.target.value)
                            console.log(e.target.value)
                        }} className='w-full px-4 py-[1rem] border rounded-2xl rounded-r-none' placeholder='Enter Train Number' />
                        <button onClick={()=>{handleBuyCourse()}} className='bg-[#0578FF] hover:bg-[#006ce8] transition-all ease-in duration-200 text-white font-semibold text-lg px-5 rounded-r-2xl'>Search</button>
                    </div>
                    {/* </form> */}
                <div>
                    <div className={`${!visible ? "invisible": "block"} grid lg:grid-cols-4 grid-cols-2 gap-6 mt-14`}>
                        <div className='bg-white w-[15rem] flex flex-col gap-y-2 px-10 h-[8rem] py-6 hover:scale-105 transition-all ease-in duration-200 text-center shadow-xl border rounded-2xl'>
                            <p className='text-xl font-semibold'>Train Name</p>
                            <p>
                                {trainDetails?.train_name}
                            </p>
                            
                        </div>
                        <div className='bg-white w-[15rem] flex flex-col gap-y-1 h-[8rem] py-6 hover:scale-105 transition-all ease-in duration-200 text-center shadow-xl border rounded-2xl'>
                            <p className='text-xl font-semibold'>From</p>
                            <div>
                                <p>{trainDetails?.from_stn_name}</p>
                                <p>{trainDetails?.from_stn_code}</p>
                            </div>
                        </div>
                        <div className='bg-white w-[15rem] flex flex-col gap-y-1 h-[8rem] px-10 py-6 hover:scale-105 transition-all ease-in duration-200 text-center shadow-xl border rounded-2xl'>
                            <p className='text-xl font-semibold'>To</p>
                            <div>
                                <p>{trainDetails?.to_stn_name}</p>
                                <p>{trainDetails?.to_stn_code}</p>
                            </div>
                        </div>
                        <div className='bg-white w-[15rem] flex flex-col gap-y-2 h-[8rem] px-10 py-6 hover:scale-105 transition-all ease-in duration-200 text-center shadow-xl border rounded-2xl'>
                            <p className='text-xl font-semibold'>Departure</p>
                            <p>{trainDetails?.from_time}</p>
                        </div>
                        <div className='bg-white w-[15rem] flex flex-col gap-y-2 h-[8rem] px-10 py-6 hover:scale-105 transition-all ease-in duration-200 text-center shadow-xl border rounded-2xl'>
                            <p className='text-xl font-semibold'>Arival</p>
                            <p>{trainDetails?.to_time}</p>
                        </div>
                        <div className='bg-white w-[15rem] flex flex-col gap-y-2 h-[8rem] px-10 py-6 hover:scale-105 transition-all ease-in duration-200 text-center shadow-xl border rounded-2xl'>
                            <p className='text-xl font-semibold'>Duration</p>
                            <p>{trainDetails?.travel_time} Hours</p>
                        </div>
                        <div className='bg-white w-[15rem] flex flex-col gap-y-2 h-[8rem] px-10 py-6 hover:scale-105 transition-all ease-in duration-200 text-center shadow-xl border rounded-2xl'>
                            <p className='text-xl font-semibold'>Type</p>
                            {/* <p>{type}</p> */}
                            <p>{trainDetails?.type}</p>
                        </div>
                        <div className='bg-white w-[15rem] flex flex-col gap-y-2 h-[8rem] hover:scale-105 transition-all ease-in duration-200 px-10 py-6 text-center shadow-xl border rounded-2xl'>
                            <p className='text-xl font-semibold'>Total Distance</p>
                            {/* <p>{type}</p> */}
                            <p>{trainDetails?.distance_from_to} Km</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* <Footer/> */}
            </div>
        </div>
    )
}

export default GetRoute;