import React, { Component } from "react";
import MarkSheet2 from "./marksheet2";
import Test from "./test";
import Firstpage from "./Firstpage";
import Footer from "./Footer";
import { ToastContainer, toast } from 'react-toastify';

import NavBar from "./Navbar";
class MainComponent1 extends Component{
    state={
       data: [
            {
              subject: "General Knowledge",
              name: "4A",
              questions: [
                {
                  text: "What is the capital of India",
                  options: ["New Delhi", "London", "Paris", "Tokyo"],
                  answer: 1
                },
                {
                  text: "What is the capital of Italy",
                  options: ["Berlin", "London", "Rome", "Paris"],
                  answer: 3
                },
                {
                  text: "What is the capital of China",
                  options: ["Shanghai", "HongKong", "Shenzen", "Beijing"],
                  answer: 4
                },
                {
                  text: "What is the capital of Nepal",
                  options: ["Tibet", "Kathmandu", "Colombo", "Kabul"],
                  answer: 2
                },
                {
                  text: "What is the capital of Iraq",
                  options: ["Baghdad", "Dubai", "Riyadh", "Teheran"],
                  answer: 1
                },
                {
                  text: "What is the capital of Bangladesh",
                  options: ["Teheran", "Kabul", "Colomdo", "Dhaka"],
                  answer: 4
                },
                {
                  text: "What is the capital of Sri Lanka",
                  options: ["Islamabad", "Colombo", "Maldives", "Dhaka"],
                  answer: 2
                },
                {
                  text: "What is the capital of Saudi Arabia",
                  options: ["Baghdad", "Dubai", "Riyadh", "Teheran"],
                  answer: 1
                },
                {
                  text: "What is the capital of France",
                  options: ["London", "New York", "Paris", "Rome"],
                  answer: 3
                },
                {
                  text: "What is the capital of Germany",
                  options: ["Frankfurt", "Budapest", "Prague", "Berlin"],
                  answer: 4
                },
                {
                  text: "What is the capital of Sweden",
                  options: ["Helsinki", "Stockholm", "Copenhagen", "Lisbon"],
                  answer: 2
                },
                {
                  text: "What is the currency of UK",
                  options: ["Dollar", "Mark", "Yen", "Pound"],
                  answer: 4
                },
                {
                  text: "What is the height of Mount Everest",
                  options: ["9231 m", "8848 m", "8027 m", "8912 m"],
                  answer: 2
                },
                {
                  text: "What is the capital of Japan",
                  options: ["Beijing", "Osaka", "Kyoto", "Tokyo"],
                  answer: 4
                },
                {
                  text: "What is the capital of Egypt",
                  options: ["Cairo", "Teheran", "Baghdad", "Dubai"],
                  answer: 1
                }
              ]
            },
            {
              subject: "Maths",
              name: "10C",
              questions: [
                {
                  text: "What is 8 * 9",
                  options: ["72", "76", "64", "81"],
                  answer: 1
                },
                {
                  text: "What is 2*3+4*5",
                  options: ["70", "50", "26", "60"],
                  answer: 3
                }
              ]
            },
            {
              subject: "Chemistry",
              name: "7A(i)",
              questions: [
                {
                  text: "What is the melting point of ice",
                  options: ["0F", "0C", "100C", "100F"],
                  answer: 2
                },
                {
                  text: "What is the atomic number of Oxygen",
                  options: ["6", "7", "8", "9"],
                  answer: 3
                },
                {
                  text: "What is the atomic number of Carbon",
                  options: ["6", "7", "8", "9"],
                  answer: 1
                },
                {
                  text: "Which of these is an inert element",
                  options: ["Flourine", "Suphur", "Nitrogen", "Argon"],
                  answer: 4
                },
                {
                  text: "What is 0 Celsius in Fahrenheit",
                  options: ["0", "32", "20", "48"],
                  answer: 2
                }
              ]
            },
            {
              subject: "Computers",
              name: "3B",
              questions: [
                {
                  text: "How many bytes are there in 1 kilobyte",
                  options: ["16", "256", "1024", "4096"],
                  answer: 3
                },
                {
                  text: "Who developed ReactJS",
                  options: ["Facebook", "Google", "Microsoft", "Apple"],
                  answer: 1
                },
                {
                  text: "Angular is supported by ",
                  options: ["Facebook", "Google", "Microsoft", "Twitter"],
                  answer: 2
                },
                {
                  text: "C# was developed by ",
                  options: ["Amazon", "Google", "Microsoft", "Twitter"],
                  answer: 3
                },
                {
                  text: "Bootstrap was developed by ",
                  options: ["Apple", "Google", "Facebook", "Twitter"],
                  answer: 4
                },    
                {
                  text: "AWS is provided by ",
                  options: ["Apple", "Amazon", "Microsoft", "Google"],
                  answer: 2
                },    
                {
                  text: "Azure is provided by ",
                  options: ["Microsoft", "Amazon", "IBM", "Google"],
                  answer: 1
                },
                {
                  text: "Angular is a framework that uses ",
                  options: ["Java", "Python", "C#", "Typescript"],
                  answer: 4
                }
              ]
            }
          ],
        view:0,
        marksdetails:0,
        currentIndex:0,
        index1:0,
        check:0,
        
}

do=(index)=>{
    let s1={...this.state}
    s1.index1=index
    s1.view=2
    s1.currentIndex=0
    s1.check=0
    //console.log(s1.index1,index)
    this.setState(s1)

}
check=(index)=>{
  let s1={...this.state}
  s1.index1=index
  s1.view=2
  s1.currentIndex=0
  s1.check=1
  
  this.setState(s1)
}
handleViewMarkSheet=()=>{
  let s1={...this.state}
  s1.view=3
  this.setState(s1)

}
handeltestview=()=>{
  let s1={...this.state}
  
  console.log(toast)
  s1.view=1
  this.setState(s1)

}
/*handleNextPrev=(index)=>{
  let s1={...this.state}
s1.currentIndex=index
  if(s1.currentIndex){
  s1.currentIndex=+s1.currentIndex+1}
  else{}
  console.log(s1.currentIndex,index)
  this.setState(s1)
  
}*/
handleSubmit=()=>{
  let s1={...this.state}
 
  s1.view=1
  this.setState(s1)
}
hanleViewQuestion=(index)=>{
  let s1={...this.state}
  s1.currentIndex=index
if(s1.currentIndex)
{s1.view=2}
else{}
  //console.log(s1.currentIndex)

  this.setState(s1)

}
render(){
        const {data,view,index1,currentIndex,check}=this.state
       return(<div className="container">
        <ToastContainer/>
    {view==0?(<Firstpage
    onTestview={this.handeltestview}/>):
    view==1?(<div>
      <NavBar />
    <h3 className="text-center m-2"> Choose the Assignment</h3>
    <div className="row border bg-info text-light text-center "
    style={{height:"40px"}}>
            <div className="col-3">Subject</div>
            <div className="col-2">Assignment</div>
            <div className="col-2">Performance</div>
            <div className="col-2"></div>
                </div>
            {data.map((d1,index)=>(
                <div className="row border text-center"
                style={{height:"40px"}}>
            <div className="col-3">{d1.subject}</div>
            <div className="col-2">{d1.name}</div>
            <div className="col-2">{d1.per?(d1.per):("Not Done")}</div>
            <div className="col-2">
              {!d1.per? ( <button className="btn btn-primary "
                onClick={()=>this.do(index)}>
                    Do
                </button>):(<button disabled className="btn btn-primary ">
                    Done
                </button>)}
                </div>
                <div className="col-2">
               {d1.per?
      (<button className="btn btn-primary" 
      onClick={()=>this.check(index)}>Check</button>):""} 
            </div>
                </div>
            ))}</div>):view===2?(  
        <Test questions={data[index1].questions}
        data={data[index1]}
        currentIndex={currentIndex}
             onViewChange={this.handleViewMarkSheet}
             onNextPrev={this.handleNextPrev}
             check={check}/>)
             :view===3?(<MarkSheet2 
             questions={data[index1].questions} 
             onSubmit={this.handleSubmit} 
             data={data[index1]} 
             check={check}
             currentIndex={currentIndex}
             onviewQuestion={this.hanleViewQuestion}/>):""
             }

</div>)
    }
}
export default MainComponent1