import React from "react";


const Navbar = ()=>{
    return(
        <>
        <div className='bg-[#151515] 1/10   py-4 border-b-1 border-[#585757] flex text-white justify-around'>
            <p className='text-3xl text-white font-bold'>AWS Security Hub</p>
            <div className="list flex gap-5 text-2xl px-2 py-1">
                 <h1>Controls</h1>
                 <h1>Insights</h1>
            </div>
            <button className="text-black text-2xl font-semibold bg-amber-300 w-1/10 p-1 rounded-2xl">Login</button> 
        </div>
        </>
    );
}

export default Navbar