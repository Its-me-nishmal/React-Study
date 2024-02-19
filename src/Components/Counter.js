import React,{useState} from 'react'

function Counter() {
    const [count,setCount] = useState(0)
  return (
    <div>
      <h1>Counter Example</h1>
      <h4>{count}</h4>
      <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}

export default Counter