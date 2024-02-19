import React,{useState} from 'react'

function Ternery(p) {
    const {name} = p;
    const [login,setLogin] = useState(false) 
  return (
    <div>
        <p>Welcome {login?name:'user'}!</p>
        <button onClick={()=>setLogin(!login)}>{login?'Logout':'login'}</button>
    </div>
  )
}

export default Ternery