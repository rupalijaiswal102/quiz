import React, { Component } from "react";
import { BsFillCalendar2XFill } from "react-icons/bs";
import { FcDocument} from "react-icons/fc";
import {FaEvernote} from "react-icons/fa";
import NavBar from "./Navbar";
import Footer from "./Footer";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';


class Firstpage extends Component{

    viewTest=()=>{
        
        this.props.onTestview()
    
    }
    instruction=()=>{
        
        toast("👁 Instructions:- Each Question Contains 1 Marks. Total 30 questions are there.",
        {
         position:"top-center",
         autoClose: 5000,
         theme: "colored" })
    
    }

    render(){
        return(<div>
            <NavBar />
        <div className="row border m-1" style={{borderRadius:"15px"}}>
            <h2 className="m-2">Live Quiz</h2>
            <div className="col-6 text-center">
<div className="row" style={{marginTop:"20%"}}>
    <div className="col-6">
        <p><BsFillCalendar2XFill/>  Held on July 20, 2023</p>
        </div>
        <div className="col-6">
           <p> <FcDocument/> 30 Q’s · 30 marks
60 mins

</p>   
</div>
</div>
<div style={{marginTop:"10%"}}>

<button variant="contained" style={{width:"40%", height:"45px",borderRadius:"10px"}}
  className="btn btn-success m-2"
  onClick={()=>this.viewTest()}>Take text</button>

     <button className="btn btn-light m-2"  onClick={()=>this.instruction()}
     style={{width:"40%", height:"45px",borderRadius:"10px"}} >
        Instructions</button>
                </div>      
            </div>
     <div className="col-6 text-center">
         <img className="m-2" src="https://static.uacdn.net/production/_next/static/images/quiz/default-empty.svg?q=75&auto=format%2Ccompress&w=750" />
            </div>
        </div>
        <Footer/>
        </div>)
    }
}
export default Firstpage