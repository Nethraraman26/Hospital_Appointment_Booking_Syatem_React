import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
function AdminLogin(){
const[user,setUser]=useState("")
const[pass,setPass]=useState("")
const navigate=useNavigate()
const login=(e)=>{
e.preventDefault()
if(user==="admin" && pass==="admin123")
{
navigate("/admin")
}
else
{
alert("Invalid Admin Login")
}
}
return(
<div className="container mt-5">
<div className="row justify-content-center">
<div className="col-md-4">
<div className="card shadow">
<div className="card-header bg-dark text-white text-center">
<h4>Admin Login</h4>
</div>
<div className="card-body">
<form onSubmit={login}>
<input
className="form-control mb-3"
placeholder="Username"
onChange={(e)=>setUser(e.target.value)}
required
/>
<input
type="password"
className="form-control mb-3"
placeholder="Password"
onChange={(e)=>setPass(e.target.value)}
required
/>
<button className="btn btn-dark w-100">
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
export default AdminLogin