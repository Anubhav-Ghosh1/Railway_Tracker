// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import GetRoute from "./GetRoute";
// import GetTrainBetweenStations from "./GetTrainBetweenStations";
// import GetTrainInformation from "./GetTrainInformation";
// import GetTrainOnDate from "./GetTrainOnDate"
// import Home_Image from "../assets/Home_Image.svg"
// import "./index.css";

// function Home() {
//   // { user, logout }
//   const [selected, setSelected] = useState(""); // State to track the selected option

//   // Function to handle button clicks and update the selected option
//   const handleButtonClick = (option) => {
//     setSelected(option);
//   };

//   // Render the component based on the selected option
// const renderComponent = () => {
//   switch (selected) {
//     case "TrainRoute":
//       return <GetRoute/>;
//     case "TrainBetweenStations":
//       return <GetTrainBetweenStations />;
//     case "TrainInfo":
//       return <GetTrainInformation />;
//     case "TrainOnDate":
//       return <GetTrainOnDate />;
//     default:
//       return null;
//   }
// };

//   return (
//     <div>
//       <div >
//         {/* image and navbar */}
//         <Navbar/>
//         <div className="relative">
//           <img src={Home_Image} alt="" className="" />
//           <p className="absolute top-[36%] text drop-shadow-2xl opacity-90 left-[37%] font-cursive text-[5rem] text-white">
//            Travel Now
//            <span className="text-xl">with Railway</span>
//           </p>
//           <div className="absolute top-[90%] left-[20%] grid gap-x-20 grid-cols-4">
//             <div onClick={()=>{
//               setSelected("TrainInfo");}
//             } className={`${selected === "TrainInfo" ? "bg-blue-200" : ""}bg-white shadow-2xl rounded-lg flex justify-center items-center w-[12rem] h-[8rem]`}>
//               <img src="" alt="" />
//               <p className="text-xl font-semibold">Get Train Info</p>
//             </div>
//             <div onClick={()=>{
//               setSelected("BetweenStation");}
//             } className="bg-white shadow-2xl rounded-lg flex justify-center items-center w-[12rem] h-[8rem]">
//               <img src="" alt="" />
//               <p className="text-xl font-semibold">Get Between Station</p>
//             </div>
//             <div onClick={()=>{
//               setSelected("ToandFrom");
//             }} className="bg-white shadow-2xl rounded-lg flex justify-center items-center w-[12rem] h-[8rem]">
//               <img src="" alt="" />
//               <p className="text-xl font-semibold">To and from</p>
//             </div>
//             <div onClick={()=>{
//               setSelected("PNR");
//             }} className="bg-white inset-20 shadow-2xl rounded-lg flex justify-center items-center w-[12rem] h-[8rem]">
//               <img src="" alt="" />
//               <p className="text-xl font-semibold">PNR Status</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     // <div>
//     //   {/* <Navbar user={user} logout={logout} /> */}
//     //   <div className="flex justify-between px-24 py-10">
//     //     {/* Buttons for different options */}
//     //     <button
//     //       className={`${
//     //         selected === "TrainRoute" ? "bg-[#0578FF] text-white" : "opacity-70"
//     //       } rounded-2xl text-lg font-semibold bg-blue-600 text-white hover:bg-[#006ce8] hover:shadow-md transition-all ease-in duration-200 px-4 py-2`}
//     //       onClick={() => handleButtonClick("TrainRoute")}
//     //     >
//     //       Train Route
//     //     </button>
//     //     <button
//     //       className={`${
//     //         selected === "TrainBetweenStations" ? "bg-[#0578FF] text-white" : "opacity-70"
//     //       } rounded-2xl text-lg font-semibold bg-blue-600 text-white hover:bg-[#006ce8] hover:shadow-md transition-all ease-in duration-200 px-4 py-2`}
//     //       onClick={() => handleButtonClick("TrainBetweenStations")}
//     //     >
//     //       Train Between Stations
//     //     </button>
//     //     <button
//     //       className={`${
//     //         selected === "TrainInfo" ? "bg-[#0578FF] text-white" : "opacity-70"
//     //       } rounded-2xl text-lg font-semibold bg-blue-600 text-white hover:bg-[#006ce8] hover:shadow-md transition-all ease-in duration-200 px-4 py-2`}
//     //       onClick={() => handleButtonClick("TrainInfo")}
//     //     >
//     //       Train Info
//     //     </button>
//     //     <button
//     //       className={`${
//     //         selected === "TrainOnDate" ? "bg-[#0578FF] text-white" : "opacity-70"
//     //       } rounded-2xl text-lg font-semibold bg-blue-600 text-white hover:bg-[#006ce8] hover:shadow-md transition-all ease-in duration-200 px-4 py-2`}
//     //       onClick={() => handleButtonClick("TrainOnDate")}
//     //     >
//     //       Train on Date
//     //     </button>
//     //   </div>
//     //   {/* Render the component based on the selected option */}
//     //   <div className="px-24 py-10">{renderComponent()}</div>
//     // </div>
//   );
// }

// export default Home;
import React, { useState } from "react";
import Navbar from "./Navbar";
import GetRoute from "./GetRoute";
import GetTrainBetweenStations from "./GetTrainBetweenStations";
import GetTrainInformation from "./GetTrainInformation";
import GetTrainOnDate from "./GetTrainOnDate";
import { FaTrain } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import { ImTicket } from "react-icons/im";
import { useAuth0 } from "@auth0/auth0-react";
import Home_Image from "../assets/Home_Image.svg";
import "./index.css";
import GetPNR from "./GetPNR";
import Footer from "./Footer";

function Home() {
  const [selected, setSelected] = useState("");
  const {user,loginWithRedirect,isAuthenticated,logout} = useAuth0();
  const renderComponent = () => {
    switch (selected) {
      case "TrainInfo":
        return <GetRoute />;
      case "BetweenStation":
        return <GetTrainBetweenStations />;
      case "ToandFrom":
        return <GetTrainInformation />;
      case "PNR":
        return <GetPNR />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        {/* image and navbar */}
        <Navbar loginWithRedirect={loginWithRedirect} user={user} isAuthenticated={isAuthenticated} logout={logout} />
        <div className="relative mb-44">
          <img src={Home_Image} alt="" className="" />
          <p className="absolute top-[36%] text drop-shadow-2xl opacity-90 left-[37%] font-cursive text-[5rem] text-white">
            Travel Now <span className="text-xl">with Railway</span>
          </p>
          <div className="absolute top-[90%] left-[10%] grid gap-x-20 grid-cols-4">
            <div
              onClick={() => {
                setSelected("TrainInfo");
              }}
              className={`${
                selected === "TrainInfo"
                  ? "shadow-[rgba(255,214,10,1)_15px_15px_0px_0px]"
                  : ""
              } bg-white shadow-2xl transition-all ease-in duration-200 flex flex-col gap-y-2 justify-center items-center w-[14rem] h-[8rem]`}>
              <FaTrain className="text-2xl" />
              <p className="text-xl font-semibold">Get Train Info</p>
            </div>
            <div
              onClick={() => {
                setSelected("BetweenStation");
              }}
              className={`${
                selected === "BetweenStation"
                  ? "shadow-[rgba(255,214,10,1)_15px_15px_0px_0px]"
                  : ""
              } bg-white shadow-2xl transition-all ease-in duration-200 flex flex-col gap-y-2 justify-center items-center w-[14rem] h-[8rem]`}>
              <FaMapMarkerAlt className="text-2xl" />
              <p className="text-xl font-semibold">Get Between Station</p>
            </div>
            <div
              onClick={() => {
                setSelected("ToandFrom");
              }}
              className={`${
                selected === "ToandFrom"
                  ? "shadow-[rgba(255,214,10,1)_15px_15px_0px_0px]"
                  : ""
              } bg-white shadow-2xl transition-all ease-in duration-200 flex flex-col gap-y-2 justify-center items-center w-[14rem] h-[8rem]`}>
              <MdTravelExplore className="text-2xl" />
              <p className="text-xl font-semibold">To and from</p>
            </div>
            <div
              onClick={() => {
                setSelected("PNR");
              }}
              className={`${
                selected === "PNR"
                  ? "shadow-[rgba(255,214,10,1)_15px_15px_0px_0px]"
                  : ""
              } bg-white inset-20 shadow-2xl flex flex-col gap-y-2 justify-center transition-all ease-in duration-200 items-center w-[14rem] h-[8rem]`}>
              <ImTicket className="text-2xl" />
              <p className="text-xl font-semibold">PNR Status</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-44">
        {renderComponent()}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
