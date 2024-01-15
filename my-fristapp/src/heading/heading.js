//in react we have two types of components
//default componentes
//in this default each modules can have only one default export
//default modules can be called by any name 
//nammed components
//in nammed components we can have as many as default export
//in nammed components we can use call with other name instead of calling with components name if we use as example HeadinfComponents As Santhosh
const HeadingComponents=()=>{
    return(
        <div>
            <h1>this is h1 heading</h1>
        </div>
    )
}
export default HeadingComponents

export const HeadingComponents2=()=>{
    return(
        <div>
            <h1>this is h2 heading</h1>
        </div>
    )
}

export const HeadingComponents3=()=>{
    return(
        <div>
            <h1>this is h3 heading</h1>
        </div>
    )
}


//JSX-;it is simply a lang extenstion for javascript code where we can add markup(html) in side our .js file
//we can write html,js code in a same file with out any separations
 export const VaribleName=()=>{
    const name="santhosh"
    return(
        <h1>this is {name}</h1>
    )
}
//  //rules of JSX;
//  //1.every component must return single parent
 export const TodoList=()=>{
    return(
        <div>
        <h1>Hedy Lamarr's Todos</h1>
        <img src="https://i.imgur.com/yXOvdOSs.jpg" 
  alt="Hedy Lamarr" 
  class="photo"
/>
<ul>
    <li>Invent new traffic lights</li>
    <li>Rehearse a movie scene</li>
    <li>Improve the spectrum technology</li>
    
</ul>
</div>
    )
        
 }
 //class is pre defined keyword in in based compoients in react so 
 //classname in instead of class
 // every eliment should be in formating ex;eliment should have closing tag
//  //tags are eliment 
 export const TodoList2=()=>{
    const details={
        name:"Hedy Lamarr's Todos",
        imageURL:"https://i.imgur.com/yXOvdOSs.jpg",
        imageALT:"Hedy Lamarr",
        listItems:["Invent new traffic lights","Rehearse a movie scene","Improve the spectrum technology"]


    }
 
    
    //const {name:santhosh,ImageURL:alternateText,listIteams}=details
    return(
        <div>
            <h1>{details.name}</h1>
            <img 
            src={details.imageURL}
            alt={details.imageALT}
            class="photo"
            />
            <ul>
                <li>{details.listIteams[0]}</li>
                <li>{details.listIteams[1]}</li>
                <li>{details.listIteams[2]}</li>
            </ul>
        </div>
    )
    }

//destructure unpacking values from array or object into distinct varibels



