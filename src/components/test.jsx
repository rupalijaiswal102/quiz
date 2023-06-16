import React, { Component } from "react";

class Test extends Component{
    state={
        questions:this.props.questions,
        currentIndex:this.props.currentIndex,
        check:this.props.check,
        data:this.props.data,
    }
btn1=(op,index)=>{
    let s1={...this.state}
s1.questions[index].ans=op
   if(op=="A"){
   s1.questions[index].ans1=1
}
else if(op=="B"){
    s1.questions[index].ans1=2
 }
 else if(op=="C"){
    s1.questions[index].ans1=3
 }
 else {
    s1.questions[index].ans1=4
 }
 
//console.log(s1.questions)
    this.setState(s1)
}
next=(incr)=>{
    let s1={...this.state}
    s1.currentIndex=+s1.currentIndex+incr
    //console.log(s1.currentIndex)
    this.setState(s1)
}
showMarksheet=()=>{
    this.props.onViewChange(this.state.questions)

    }
    
  render(){
        const {questions,currentIndex,check,data}=this.state
      
          return(
        <div className="container">
            
        <div className="row border bg-light" 
            style={{width:"90%" }}>
 <h4 style={{marginLeft:"25%",marginTop:"1px"}}>
 {data.subject} : Assignment {data.name}</h4>   
    <div className="col-2">
    Time: {questions.length} Mins
        </div> 
        <div className="col-2" style={{marginLeft:"65%"}}>
        Max Score : {questions.length}
        </div>
        </div>  
<button className="btn btn-primary " 
style={{marginLeft:"69%",marginTop:"5px"}} 
onClick={()=>this.showMarksheet()}>View Marking Sheet</button>

 {questions.map((q1,index)=>(
           <div className="row">
         {currentIndex===index?(<div>
        <h4>Question Number : {currentIndex+1}</h4>
          
            <h6>{q1.text}</h6>
            {check==0?(<div>
<button className="btn btn-light m-2 " 
onClick={()=>this.btn1("A",index)}>A. {q1.options[0]}</button>
<br/>
<button className="btn btn-light m-2 " 
onClick={()=>this.btn1("B",index)}>B. {q1.options[1]}</button>
<br/>
<button className="btn btn-light m-2 " 
onClick={()=>this.btn1("C",index)}>C. {q1.options[2]}</button>
 <br/>
 <button className="btn btn-light m-2 " 
 onClick={()=>this.btn1("D",index)}>D.{q1.options[3]}</button>
  <br/>your Answer : {q1.ans?q1.ans:"Not Answered"}
  </div>):
  (<div>
    <button className="btn btn-light m-2 " 
disabled>A. {q1.options[0]}</button>
<br/>
<button className="btn btn-light m-2 " 
disabled>B. {q1.options[1]}</button>
<br/>
<button className="btn btn-light m-2 " 
disabled>C. {q1.options[2]}</button>
 <br/>
 <button className="btn btn-light m-2 " 
 disabled>D.{q1.options[3]}</button>
  <br/>your Answer : {q1.ans?q1.ans:"Not Answered"}
   <br/> {q1.ans1==q1.answer?
   <div className="text-success">correct Answer</div>
   :<div className="text-danger">Incorrect. The correct answer {q1.answer==1?"A":q1.answer==2?"B":q1.answer==3?"C":q1.answer==4?"D":""}</div>}
    </div>)}
  
    <div className="row">
    <div className="col-6">
   {currentIndex==0?"":( <button className="btn btn-primary m-2" 
    onClick={()=>this.next(-1)}>
    Previous Question</button>)}
    {currentIndex>=questions.length-1?"":( <button className="btn btn-primary m-2" 
    onClick={()=>this.next(1)}>
    Next Question </button>)}
</div>
</div>
</div>):""}
 </div>
 ))}
</div>)
    }
}
export default Test