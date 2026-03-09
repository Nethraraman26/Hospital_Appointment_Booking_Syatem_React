import React, { useEffect, useState } from "react";
function Appointments(){
const [appointments,setAppointments] = useState([])
useEffect(()=>{
const saved =
JSON.parse(localStorage.getItem("appointments")) || []
setAppointments(saved)
},[])
return(
<div className="container mt-5">
<div className="card shadow-lg">
<div className="card-header bg-primary text-white">
<h4 className="mb-0">📅 Appointment List</h4>
</div>
<div className="card-body">
{appointments.length === 0 ? (
<div className="alert alert-info text-center">
No appointments booked yet.
</div>
) : (
<table className="table table-hover table-bordered align-middle">
<thead className="table-dark text-center">
<tr>
<th>#</th>
<th>Patient Name</th>
<th>Doctor</th>
<th>Date</th>
<th>Status</th>
</tr>
</thead>
<tbody className="text-center">
{appointments.map((a,index)=>(
<tr key={index}>
<td>{index+1}</td>
<td className="fw-bold text-primary">
👤 {a.patient}
</td>
<td>
🩺 Dr. {a.doctor}
</td>
<td>
📅 {a.date}
</td>
<td>
<span className="badge bg-success">
Booked
</span>
</td>
</tr>
))}
</tbody>
</table>
)}
</div>
</div>
</div>
)
}
export default Appointments;