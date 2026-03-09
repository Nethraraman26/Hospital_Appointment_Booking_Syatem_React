import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
function AdminDoctors(){
const[name,setName]=useState("")
const[dept,setDept]=useState("")
const[doctors,setDoctors]=useState([])
useEffect(()=>{
const saved =
JSON.parse(localStorage.getItem("doctors")) || []
setDoctors(saved)
},[])
const addDoctor=(e)=>{
e.preventDefault()
const newDoctor={
name,
dept,
available:true
}
const updated=[...doctors,newDoctor]
setDoctors(updated)
localStorage.setItem("doctors",JSON.stringify(updated))
setName("")
setDept("")
}
const toggleAvailability=(index)=>{
const updated=[...doctors]
updated[index].available=!updated[index].available
setDoctors(updated)
localStorage.setItem("doctors",JSON.stringify(updated))
}
return(
<div className="container mt-5">
<div className="text-center mb-4">
<h2 className="text-primary fw-bold">🩺 Admin Doctor Management</h2>
<p className="text-muted">Add doctors and control their availability</p>
</div>
<div className="row g-4">
<div className="col-md-4">
<div className="card shadow-lg border-0">
<div className="card-header bg-primary text-white fw-bold text-center">
➕ Add New Doctor
</div>
<div className="card-body">
<form onSubmit={addDoctor}>
<input
className="form-control mb-3"
placeholder="Doctor Name"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>
<input
className="form-control mb-3"
placeholder="Department"
value={dept}
onChange={(e)=>setDept(e.target.value)}
required
/>
<button className="btn btn-primary w-100">
Add Doctor
</button>
</form>
</div>
</div>
</div>
<div className="col-md-8">
<div className="card shadow-lg border-0">
<div className="card-header bg-dark text-white fw-bold">
👨‍⚕️ Doctor List
</div>
<div className="card-body p-0">
<table className="table table-hover table-bordered mb-0 text-center">
<thead className="table-primary">
<tr>
<th>#</th>
<th>Doctor</th>
<th>Department</th>
<th>Status</th>
<th>Toggle</th>
<th>Manage</th>
</tr>
</thead>
<tbody>
{doctors.length === 0 ? (
<tr>
<td colSpan="6" className="text-muted p-4">
No doctors added yet
</td>
</tr>
) : (
doctors.map((doc,index)=>(
<tr key={index}>
<td>{index+1}</td>
<td className="fw-bold text-primary">
👨‍⚕️ {doc.name}
</td>
<td>{doc.dept}</td>
<td>
{doc.available ?
<span className="badge bg-success">
Available
</span>
:
<span className="badge bg-danger">
Not Available
</span>
}
</td>
<td>
<button
className="btn btn-warning btn-sm"
onClick={()=>toggleAvailability(index)}
>
Toggle
</button>
</td>
<td>
<Link
to="/admin-appointments"
className="btn btn-danger btn-sm"
>
Appointments
</Link>
</td>
</tr>
))
)}
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
)
}
export default AdminDoctors