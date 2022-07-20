import React, {useState} from 'react'
import axios from 'axios';

export default function Login() {

  // backend URL
  const url = "http://localhost:5000/"

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [error, setError] = useState<string>();


  const onSubmit = async()=>{

    const status = await axios.post(url+"auth/checkLogin", {username, password});

    if(status.data.username && status.data.password){

      setError("exists")

    }else{
      
      setError("Invalid username & password");
    }

  }
  

  return (
    <div className='grid h-screen place-items-center'>
      <div className='bg-white w-4/5 max-w-screen-md m-auto'>
        <div className="text-xl">Login</div>
        <input type="text" className='' onChange={(e)=> setUsername(e.currentTarget.value)} name='username' />
        <input type="text" onChange={(e)=> setPassword(e.currentTarget.value)} name="password" />
        <div>{error}</div>
        <button onClick={onSubmit}>submit</button>
      </div>
    </div>
    )
}
