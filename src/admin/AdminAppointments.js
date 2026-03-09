import React,{useState,useEffect} from "react";
function AdminAppointments(){
const[appointments,setAppointments]=useState([])
useEffect(()=>{
const data =
JSON.parse(localStorage.getItem("appointments")) || []
setAppointments(data)
},[])
const deleteAppointment=(index)=>{
const confirmDelete =
window.confirm("Delete this appointment?")
if(!confirmDelete) return
const updated=[...appointments]
updated.splice(index,1)
setAppointments(updated)
localStorage.setItem(
"appointments",
JSON.stringify(updated)
)
}
return(
<div className="container mt-5">
<h2 className="text-center text-danger mb-4">
Admin - Manage Appointments
</h2>
<table className="table table-bordered table-hover shadow">
<thead className="table-dark">
<tr>
<th>Patient</th>
<th>Doctor</th>
<th>Date</th>
<th>Action</th>
</tr>
</thead>
<tbody>
{appointments.length === 0 ? (
<tr>
<td colSpan="4" className="text-center">
No Appointments Found
</td>
</tr>
) : (
appointments.map((app,index)=>(
<tr key={index}>
<td>{app.patient}</td>
<td>{app.doctor}</td>
<td>{app.date}</td>
<td>
<button
className="btn btn-danger btn-sm"
onClick={()=>deleteAppointment(index)}
>
Delete
</button>
</td>
</tr>
))
)}
</tbody>
</table>
</div>
)
}
export default AdminAppointments