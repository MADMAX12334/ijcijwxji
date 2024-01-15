//exception handling
//exception handling is a process or method for handling abnoraml state in code during excute time 
//also enble to handle flow controll of code
//types of erros
//syntax error
//run time error
//client side error
//to solve this error we have some methods
//1.try 2.catch 3.finally



import { Component } from "react"


export class ApiCall extends Component{
    handleData=()=>{
        try{
        fetch("https://fakestoreapi.com/carts")
        .then(response=>response.json())
        .then(response=>console.log("repsopnded"))
        .catch(err=>console.log("error"))
        }catch{
            console.log("404 notfound")
            alert("Something went wrong")
        }
    }
    render()
    {
       
        return(
            <>
          <h2>Api Calling</h2>
          <button onClick={this.handleData}>Click to fetch</button>
          </>
        )
        
    }
}