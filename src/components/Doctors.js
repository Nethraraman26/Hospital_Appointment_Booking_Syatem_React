import React,{useEffect,useState} from "react";
function Doctors(){
const [doctors,setDoctors]=useState([])
useEffect(()=>{
const saved =
JSON.parse(localStorage.getItem("doctors")) || []
setDoctors(saved)
},[])
return(
<div className="container mt-5">
<h2 className="text-center text-primary fw-bold mb-4">
Available Doctors
</h2>
<div className="row justify-content-center">
{doctors
.filter(doc => doc.available)
.map((doc,index)=>(
<div className="col-md-4 col-lg-3 mb-4" key={index}>
<div className="card shadow border-0 h-100">
<div className="card-body text-center">
<img
src="https://cdn-icons-png.flaticon.com/512/387/387561.png"
alt="doctor"
className="rounded-circle mb-3"
width="80"
/>
<h5 className="card-title fw-bold">
Dr. {doc.name}
</h5>
<p className="text-muted mb-2">
{doc.dept}
</p>
<span className="badge bg-success mb-3">
Available
</span>
</div>
</div>
</div>
))}
</div>
</div>
)
}
export default Doctors