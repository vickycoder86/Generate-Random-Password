import { useState } from "react";
import "./App.css";
import { LC, NC, SC, UC } from "./data/Passchar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";//this will show alert box in beautiful way
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from "react-notifications";

function App() {
//creating state for checkbox
  let[uppercase,setUppercase ]= useState(false)
  let[lowercase,setLowercase ]= useState(false)
  let[numbers,setNumbers ]= useState(false)
  let[symbole,setSymbole ]= useState(false)
  let[passwordlen,setPasswordlen]= useState(8)
  let [fpass,setFpass]= useState('') //final so password can show in BOx


let createFunction=()=>{
  let finalpass=""
  let charSet =""
  if(uppercase || lowercase || numbers || symbole){
    if(uppercase) charSet+=UC;
    if(lowercase)charSet+=LC;
    if(numbers) charSet+=NC;
    if(symbole) charSet+=SC;
  
    for(let i=0;i<passwordlen;i++){
      finalpass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
      setFpass(finalpass)

    }
    console.log(finalpass)

  }else{
    //this will show alert box in beautiful way
    //https://react-hot-toast.com/docs/toast
    // toast.error("Please Select atleast one CheckBox..!");
    NotificationManager.warning("Please Select atleast one CheckBox..!");
  }

  
}
let copyPass=()=>{
  //copy any password using predefine library
navigator.clipboard.writeText(fpass)
//this will show alert box in beautiful way
// toast.success("Password is copied");
NotificationManager.success("Password is copied");
}


  return (
    <>
    <ToastContainer />
      <div className="passwordbox">
        <h2>&#9775;   Random Password Generator   &#9775;</h2>
        <div className="passwordboxin">
          <input type="text" readOnly value={fpass} />
          <button onClick={copyPass}>Copy</button>
        </div>
        <div className='passlength'>
          <label>Password length</label>
          <input type="number" max={20} min={8} value={passwordlen} onChange={(event)=>setPasswordlen(event.target.value)}/>
          
        </div>

        <div className='passlength'>
          <label>Include Uppercase letters</label>
          <input type="checkbox" checked={uppercase} onChange={()=>setUppercase(!uppercase)} className='case' />
          
        </div>


        <div className='passlength'>
          <label>Include Lowercase letters</label>
          <input type="checkbox"  checked={lowercase} onChange={()=>setLowercase(!lowercase)} className='case'/>         
        </div>

        <div className='passlength'>
          <label>Include numbers</label>
          <input type="checkbox" checked={numbers} onChange={()=>setNumbers(!numbers)} className='case'/>       
        </div>

        <div className='passlength'>
          <label>Include symbols</label>
          <input type="checkbox" checked={symbole} onChange={()=>setSymbole(!symbole)} className='case'/>   
        </div>
        <button className="btn" onClick={createFunction}>Generate Password</button>
        <NotificationContainer />
      </div>
    </>
  );
}

export default App;
