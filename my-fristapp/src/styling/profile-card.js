
const ProfileCard=(prop)=>{
    return(
        <>
        <div classNameName="card" style={{width:"360px"}}>
    <img classNameName="card-img-top" src="https://popslider.com/wp-content/uploads/2020/10/untitled-3-1024x768.jpg" alt="Card" style={{width:"100%"}} />
    <div classNameName="card-body">
      <h4 classNameName="card-title" style={{color:prop.details.color}}>{prop.details.name}</h4>
      <p classNameName="card-text">{prop.details.designation}</p>
      <p classNameName="card-text">{prop.details.salary}</p>

      <a href="#d" classNameName="btn btn-primary">See Profile</a>
    </div>
  </div>
  </>
    )
} 
export default ProfileCard