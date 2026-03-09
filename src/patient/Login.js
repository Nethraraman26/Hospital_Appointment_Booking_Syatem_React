import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
function Login(){
const[name,setName]=useState("")
const[password,setPassword]=useState("")
const navigate=useNavigate()
const login=(e)=>{
e.preventDefault()
const users=
JSON.parse(localStorage.getItem("patients")) || []
const user=
users.find(
u => u.name === name && u.password === password
)
if(user)
{
localStorage.setItem("currentPatient",JSON.stringify(user))
alert("Login Successful")
navigate("/book")
}
else
{
alert("Invalid Name or Password")
}
}
return(
<div className="container mt-5">
<div className="row justify-content-center">
<div className="col-md-4">
<div className="card shadow-lg">
<div className="card-header bg-success text-white text-center">
<h4>Patient Login</h4>
</div>
<div className="card-body">
<form onSubmit={login}>
<input
className="form-control mb-3"
placeholder="Enter Name"
value={name}
onChange={(e)=>setName(e.target.value)}
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
<button className="btn btn-success w-100">
Login
</button>
</form>
</div>
</div>
</div>
</div>
</div>
)
}
export default Login