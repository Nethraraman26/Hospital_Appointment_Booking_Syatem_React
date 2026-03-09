import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
const [name, setName] = useState("")
const [phone, setPhone] = useState("")
const [password, setPassword] = useState("")
const navigate = useNavigate()
const register = (e) => {
e.preventDefault()
const users =
JSON.parse(localStorage.getItem("patients")) || []
const existingUser = users.find(u => u.phone === phone)
if(existingUser){
alert("Phone number already registered")
return
}
const newUser = { name, phone, password }
users.push(newUser)
localStorage.setItem(
"patients",
JSON.stringify(users)
)
alert("Registration Successful")
navigate("/login")
}
return(
<div className="container mt-5">
<div className="row justify-content-center">
<div className="col-md-5">
<div className="card shadow-lg">
<div className="card-header bg-primary text-white text-center">
<h4>Patient Register</h4>
</div>
<div className="card-body">
<form onSubmit={register}>
<input
className="form-control mb-3"
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>
<input
type="tel"
className="form-control mb-3"
placeholder="Phone Number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
pattern="[0-9]{10}"
title="Enter 10 digit phone number"
required
/>
<input
type="password"
className="form-control mb-3"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>
<button className="btn btn-primary w-100">
Register
</button>
</form>
</div>
</div>
</div>
</div>
</div>
)
}
export default Register