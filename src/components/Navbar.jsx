import React from "react";
import { FiLogOut } from "react-icons/fi";
import { IoLogIn } from "react-icons/io5";

function Navbar({loginWithRedirect,user,isAuthenticated,logout}) {
  // { user,logout }
  return (
    <div>
      <div className="h-fit bg-[#f8f8f8] mt-1 flex justify-between p-4 items-center w-full">
        <div className="text-4xl font-semibold">
          <span className="text-[#0578FF]">Rail</span>
          <span>way</span>
        </div>
        <div className="flex items-center gap-x-2">
          <div>
            {/* <img src={user?.picture} alt="" className="w-[2.5rem] rounded-full" /> */}
          </div>
          <div className="flex gap-2 text-xl">
            {
              isAuthenticated ? (<p>
                 Welcome, {" "}
                <span className="font-semibold">
                  {user?.given_name}
                  {user?.family_name}
                </span>
              </p>
                  ) : ("")
            }
           
            
          </div>
        </div>
        {
          isAuthenticated ? 
          <button onClick={()=>{
              logout();
          }} className="flex gap-x-2 items-center font-semibold hover:text-[#282828] hover:scale-95">Logout <FiLogOut className="font-semibold" /></button>
          : (
            <button onClick={()=>{
              loginWithRedirect();
          }} className="flex gap-x-2 items-center font-semibold hover:text-[#282828] hover:scale-95">Login <IoLogIn className="font-semibold text-xl" /></button>
          )
        }
      </div>
    </div>
  );
}

export default Navbar;
