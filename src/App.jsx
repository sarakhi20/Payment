import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [amount, setamount] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
      alert("please enter amount")
    }
    else{
     alert("payment successful")
  }
  


   
  } 

  return (
    <>
    <div className='Amount'>
      <h1>Online-payment</h1>
      <br />
      <input type='number' placeholder='Enter amount'value={amount}onChange={(e)=>setamount(e.target.value)}/>
      <br /> <br />
      <button onClick={handleSubmit}>submit</button>
    </div>
    </>
  )
}

export default App
