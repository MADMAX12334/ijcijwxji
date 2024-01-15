//classbased components used for creating function layer
//react data layer
//1.state and pros
//state-it is an object which holds the components  data or information in a private manner
// import {components} from "react"
    

// class Button extends components{
//     render(){
//         return(
//             <button>click me</button>
//         )
//     }

// }
// export default Button
//1.state and pros
//state-it is an object which holds the components  data or information in a private manner
//creating state in a class based components 
//1.object way of creation
// to change state or data in class based components we use
//setstate=>it will acepect two argument
//1argument=object=we will change the state
//2argumnet= callback function=we will check the state change
import { Component } from "react";




class ColorChange extends Component{
    state={
        message1:"Color changed to dark theme",
        isChanged:false,
        message2:"Color changed to light theme"
    }


handleColor=()=>{
    this.setState(
        {
            message:"Color changed",
            isChanged:!this.state.isChanged
        },()=>{}
    )
};

render(){

    const backgroundColor = this.state.isChanged ? "white" : "black";
    return (
        <>
        <button style={{backgroundColor}} className="button" onClick={this.handleColor}>{this.state.isChanged ? this.state.message2:this.state.message1}</button>

        {
           <h2>
           Color Changed to {this.state.isChanged ? "light" : "dark"}
         </h2>
        }
        </>
    )
}
}
export default ColorChange
//2.constructor way