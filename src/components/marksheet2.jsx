import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';

class MarkSheet2 extends Component{

    state={
   questions:this.props.questions,
   data:this.props.data,
   check:this.props.check,
   currentIndex:this.props.currentIndex,
     click:0
    }

    bgColor=(ans) =>
    ans
    ? "bg-secondary text-light"
    :!ans
    ? "bg-warning"
    :"";
    bgColor1=(ans1,answer) =>
    ans1===answer
    ? "bg-success text-light"
    :!ans1
    ?"bg-warning text-light"
    :ans1!==answer
    ? "bg-danger text-light"
    :"";

    submit=()=>{
        let s1 ={...this.state}
       // let b=s1.questions.map((a)=>a.ans)
   // let a=s1.questions.reduce((acc,curr)=>
   // curr.ans1==curr.answer?
   //  curr.answer:acc,0)
   
     let b=s1.questions.filter((p)=>p.ans1==p.answer)
     if(b){
       
    s1.data.per=b.length+"/"+s1.questions.length
    toast.success("Done ⭐.", {
       autoClose: 800,
        theme: "colored" })
    this.props.onSubmit(this.state.questions)
    console.log(b.length,s1.questions)
     }
     else{}
 this.setState(s1)

    }
    viewQuestion=(index,)=>{
    let s1 ={...this.state}
    if(index){
    this.props.onviewQuestion(index)
     } 
     else{}
//console.log(index,s1.currentIndex)
this.setState(s1)
}
    render(){
    
        let {questions,check,data}=this.state
      console.log(questions.name,data.name)
        return(
            <div className="container" style={{marginLeft:"5%"}} >
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
        <div style={{marginLeft:"30%"}}>
        <h3 style={{marginLeft:"12%",color:"blueviolet"}}>Marking Sheet</h3>
<div className=" m-2 border text-center " style={{width:"50%",}} >
         
            {questions.map((q,index)=>(
            check==0?( <button className={"btn m-2 " 
                +this.bgColor(q.ans) } 
                onClick={()=>this.viewQuestion(index,q.text)}>
                    {index+1}. {q.ans}
                </button>)
                :(<button className={"btn m-2 " 
                +this.bgColor1(q.ans1,q.answer) } 
                onClick={()=>this.viewQuestion(index,q.text)}>
                    {index+1}. {q.ans}
                </button>)
            ))}
            <br/>
            {check==0?(
                <div>

            <button className="btn btn-secondary m-2"
            onClick={()=>this.submit()}>Submit Assignment</button>
            </div>):(<button className="btn btn-secondary m-2"
            onClick={()=>this.submit()}>Home page</button>
          )}

</div>
</div>
        </div>)
    }
}
export default MarkSheet2