import React, {Component} from "react";
import {FaFacebookF} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";




class Footer extends Component{
    render(){
return(<div className="container bg-light">
    <div className="footer">
      <img width="30px" src="https://static.uacdn.net/production/_next/static/images/Mobile-Logo.svg?q=75&auto=format%2Ccompress&w=48" />
      <b>Myacademy</b>
			
            <hr/>
            <div className=" row m-2">
 <div className="col-6" style={{fontSize:"12px"}}>
<p>© 2023 Sorting Hat Technologies Pvt Ltd
</p>
                </div>
<div className="col-6 " >
    <div className="row" style={{marginLeft:"70%"}}>
        <div className="col-1">
    < FaFacebookF/>
    </div>
    <div className="col-1">
    <FaInstagram/>
    </div>
    <div className="col-1">
    <FaLinkedin/>
    </div>
    <div className="col-1">
    <FaYoutube/>
    </div>
    <div className="col-1">
    <FaTwitter/>
    </div>
    </div>
</div>
</div>

</div>
         </div>)
    }
}
export default Footer