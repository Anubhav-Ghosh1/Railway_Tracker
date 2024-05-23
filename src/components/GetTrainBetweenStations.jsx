import React, { useState } from 'react';
import { fetch_betweenStation } from '../utils/data';
import Footer from './Footer';

function GetTrainBetweenStations(props) {
    const [trainFrom,setTrainFrom] = useState("");
    const [trainTo,setTrainTo] = useState("");
    const [trainDetails,setTrainDetails] = useState();
    const [visible,setVisible] = useState(false);
    
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
    const handleBuyCourse = async () => {
        /*
          handleBuyCourse is used to handle the payment modal
          and also updated course and student details
        */
        
          console.log(trainFrom.toString())
          const from = trainFrom.toString();
          const to = trainTo.toString();
            const response = await fetch_betweenStation(from,to);
            // const data = await response.json();
            console.log("Response1:",response)
            setTrainDetails(response)
        /*
          If the user is not logged in then we will show and confirmation modal
          to navigate the user to login
        */
        
      };
    return (
        <div>
            <div className='w-full'>
                {/* <form  className='flex drop-shadow-md'> */}
                    <div className='flex px-36'>
                        <input type="text" onChange={(e)=>{
                            setTrainFrom(e.target.value)
                            console.log(e.target.value)
                        }} className='w-full px-4 py-[1rem] border rounded-2xl rounded-r-none' placeholder='Enter Train From (Station Code)' />
                        <input type="text" onChange={(e)=>{
                            setTrainTo(e.target.value)
                            console.log(e.target.value)
                        }} className='w-full px-4 py-[1rem] border rounded-2xl rounded-l-none rounded-r-none' placeholder='Enter Train To (Station Code)' />
                        <button onClick={()=>{handleBuyCourse()}} className='bg-[#0578FF] hover:bg-[#006ce8] transition-all ease-in duration-200 text-white font-semibold text-lg px-5 rounded-r-2xl'>Search</button>
                    </div>
                    {/* </form> */}
                <div>
                
                    <div className='grid lg:grid-cols-4 grid-cols-2 gap-6 mt-14 px-36'>
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
                    </div>
                </div>
            </div>
            <div className={`${!visible ? "invisible": "block"} grid lg:grid-cols-4 grid-cols-2 gap-6 mt-14`}>
                        <div className='bg-white w-[25rem] flex flex-col gap-y-2 px-10 py-6 hover:scale-105 transition-all ease-in duration-200 text-center shadow-xl border rounded-2xl'>
                            {/* <p className='text-xl font-semibold'>Train Name</p> */}
                            {/* <p> */}
                                {/* {trainDetails?.train_name} */}
                            {/* </p> */}
                            
                        </div>
                        </div>
        <div className='mt-60'>
            {/* <Footer/> */}
        </div>
        </div>
    );
}

export default GetTrainBetweenStations;