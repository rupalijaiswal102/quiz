import React, {Component} from "react";

class NavBar extends Component{
    render(){
         return(
        <nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top">
        <a className="navbar-brand " href="/">
        <img  src="https://static.uacdn.net/production/_next/static/images/Mobile-Logo.svg?q=75&auto=format%2Ccompress&w=48"/>
       <b>Myacademy</b> </a>
        <div className="" id="navMain">
            <ul className="navbar-nav mr-auto">
             <li className="nav-item">
                <a className="nav-link" to="/">
                    Login
                     </a>
                    </li>  
                    
                      <li className="nav-item">

                    </li>
  
                    

                    </ul> 
                      
            </div>

        </nav>)
    }

}
export default NavBar