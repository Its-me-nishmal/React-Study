import React,{useState} from 'react'
import {onhandlechang,handlesub} from './Fuctions'

function SimpleForm() {
    const [fd,setFd] = useState({
        email:null,
        password:null
    })
  return (
    <div>
        <form onSubmit={(e)=>handlesub(e,fd)}>
            <label>Email:</label><br></br>
            <input placeholder='Enter Your Email' value={fd.email} name='email' onChange={(e)=>onhandlechang(e,setFd)} ></input>
            <label>Password:</label><br></br>
            <input placeholder='Enter Your pass' type='password' name='password' value={fd.password} onChange={(e)=>onhandlechang(e,setFd)} ></input>
            <button type='submit'>Submit</button><br></br>
        </form>
    </div>
  )
}

export default SimpleForm