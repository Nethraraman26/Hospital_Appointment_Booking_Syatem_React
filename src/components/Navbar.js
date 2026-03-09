import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
return(
<nav className="navbar navbar-dark bg-primary navbar-expand-lg shadow">
<div className="container">
<Link className="navbar-brand fw-bold" to="/">
🏥 MediCare
</Link>
<div>
<Link className="btn btn-light me-2" to="/">Home</Link>
<Link className="btn btn-light me-2" to="/doctors">Doctors</Link>
<Link className="btn btn-warning me-2" to="/appointments">
Appointments
</Link>
</div>
</div>
</nav>
)
}
export default Navbar