import ProfileCard from "./profile-card";

const BootstrapComponent = () => {
  const data = [
    {
      name: "mahesh",
      color: "blue",
      designation: "civil",
      salary:"Salary-100k",
    },{
      name:"sourab",
      color: "green",
      designation: "site engnieer",
      salary:"Salary-80k",
    },{
      name:"reventh",
      color: "orange",
      designation: "full stack",
      salary:"Salary-85k"
    },{
      name:"Teddy",
      color: "brown",
      designation: "SQL",
      salary:"Salary-89k"
    }
  ];
  return (
    <>
   
      <div class="container-fluid p-5 bg-primary text-white text-center">
        <h1>My First Bootstrap Page</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>

      <div class="container mt-5">
        <div class="row">

          {data.map((val,ind)=>(
            <div class="col-sm-4">
              <ProfileCard details={val}/>
            </div>
          ))}
          
        </div>
      </div>
    </>
  );
};
export default BootstrapComponent;


//way of applying styles in react 
//1.CDN
//2.NPM=node packge manager
   

//props= is an object used ot pass the data from parrent to the child  
//nothing but additional information given to the components
//it is inmutable (cant change)  