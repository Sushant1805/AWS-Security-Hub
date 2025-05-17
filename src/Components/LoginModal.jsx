import {React,useState} from 'react'
import { X } from 'lucide-react';
import { User } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
const LoginModal = (props) => {
  const [username,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const [eyeStatus,setEyeStatus] = useState(false);
  const [passwordStatus, setPasswordStatus] = useState(false)
  const [errorMsg,seterrorMsg] = useState('');

  function setShowHandler(){
    props.setShowModal(false);
  }

  function submitHandler(e){
    if(username == '' || password == ''){
        seterrorMsg("Please Enter Valid Details!")
    }else{
      seterrorMsg("")
    }
    e.preventDefault();
    console.log(username + " " + password);
    setPassword('');
    setUserName('');
  }
  return (
    <div className="fixed inset-0 text-black bg-[rgba(0,0,0,0.25)] backdrop-blur-sm z-10 flex items-center justify-center" >

       <div className='flex flex-col '>
       <button className='place-self-end'><X  onClick={setShowHandler}/></button>
       <div className='bg-white mt-2 rounded-xl p-10 flex flex-col gap-5 drop-shadow-md'>
        
        <div className="top_heading flex flex-col gap-2">
        <h1 className='text-2xl font-semibold text-blue-600'>Login to your account</h1>
        <h1 className='text-md text-gray-500'>Welcome back, please enter your details below </h1>
        </div>
        <label className='text-black'>Username</label>
        <div className='relative'>
          <span className='absolute inset-y-0 left-0 pl-3 flex items-center'> <User className='text-gray-400' /> </span>
          <input onChange={(e)=>{setUserName(e.target.value)
          }} className='w-full focus:outline-blue-600 pl-10 border-1 border-gray-400 rounded-md px-2 py-1' type="text" value={username} name="" id="" />
        </div>
        <label className='text-black'>Password</label>
        <div className='relative'>
        <span className='absolute inset-y-0 left-0 pl-3 flex items-center'><Lock className='text-gray-400' /></span>
        <input className='w-full border-gray-400 border-1  rounded-md px-2 pl-10 py-1 focus:outline-blue-600' type={eyeStatus ? 'text' : 'password'} name="" id="" value={password} onChange={(e)=>{setPassword(e.target.value)
          }}  />
        <span className='absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500'>
          {
            !eyeStatus ?  <Eye onClick={()=>{
              !eyeStatus ? setEyeStatus(true) : setEyeStatus(false)
              }}/> :
              <EyeOff onClick={()=>{
                !eyeStatus ? setEyeStatus(true) : setEyeStatus(false)
                }}/>

          }
          
        
        </span>
        </div>
        <button className='w-full bg-blue-600 px-2 py-2 rounded-md mt-2 text-white cursor-pointer hover:bg-blue-800' onClick={submitHandler}>Log in</button>
        <h1 className='text-red-600 text-center'>{errorMsg}</h1>
        </div>
       </div>
        
        
      </div>
    
  )
}

export default LoginModal
