import React, { useState, useEffect } from "react";
function BookAppointment() {
const [patient,setPatient] = useState("")
const [doctor,setDoctor] = useState("")
const [date,setDate] = useState("")
const [time,setTime] = useState("")
const [doctors,setDoctors] = useState([])
const [availableSlots,setAvailableSlots] = useState([])
const allSlots = [
"10:00 AM",
"10:30 AM",
"11:00 AM",
"11:30 AM",
"12:00 PM",
"12:30 PM",
"1:00 PM",
"1:30 PM",
"2:00 PM",
"2:30 PM",
"3:00 PM",
"3:30 PM",
"4:00 PM"
]
useEffect(()=>{
const savedDoctors =
JSON.parse(localStorage.getItem("doctors")) || []
const availableDoctors =
savedDoctors.filter(d => d.available)
setDoctors(availableDoctors)
},[])
useEffect(()=>{
if(doctor && date){
const appointments =
JSON.parse(localStorage.getItem("appointments")) || []
const bookedSlots =
appointments
.filter(a => a.doctor === doctor && a.date === date)
.map(a => a.time)
const freeSlots =
allSlots.filter(slot => !bookedSlots.includes(slot))
setAvailableSlots(freeSlots)
}
},[doctor,date])
const bookAppointment = (e)=>{
e.preventDefault()
const appointments =
JSON.parse(localStorage.getItem("appointments")) || []
const newAppointment = {
patient,
doctor,
date,
time
}
appointments.push(newAppointment)
localStorage.setItem(
"appointments",
JSON.stringify(appointments)
)
alert("Appointment Booked Successfully")
setPatient("")
setDoctor("")
setDate("")
setTime("")
setAvailableSlots([])
}
return(
<div className="container mt-5">
<div className="row justify-content-center">
<div className="col-md-6">
<div className="card shadow-lg">
<div className="card-header bg-primary text-white text-center">
<h4>Book Appointment</h4>
</div>
<div className="card-body">
<form onSubmit={bookAppointment}>
<input
className="form-control mb-3"
placeholder="Enter Patient Name"
value={patient}
onChange={(e)=>setPatient(e.target.value)}
required
/>
<select
className="form-control mb-3"
value={doctor}
onChange={(e)=>setDoctor(e.target.value)}
required
>
<option value="">Select Doctor</option>
{doctors.map((doc,index)=>(
<option key={index} value={doc.name}>
{doc.name} ({doc.dept})
</option>
))}
</select>
<input
type="date"
className="form-control mb-3"
value={date}
onChange={(e)=>setDate(e.target.value)}
required
/>
<select
className="form-control mb-3"
value={time}
onChange={(e)=>setTime(e.target.value)}
required
>
<option value="">Select Available Slot</option>
{availableSlots.map((slot,index)=>(
<option key={index} value={slot}>
{slot}
</option>
))}
</select>
<button className="btn btn-success w-100">
Book Appointment
</button>
</form>
</div>
</div>
</div>
</div>
</div>
)
}
export default BookAppointment;