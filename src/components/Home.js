import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
const navigate = useNavigate()
return (
<div style={{background:"#f4f8ff", minHeight:"100vh"}}>
<div className="container py-5">
<div className="row align-items-center">
<div className="col-md-6">
<h1 className="display-4 fw-bold text-primary">
🏥 MediCare Hospital System
</h1>
<p className="lead text-muted mt-3">
Book doctor appointments easily and avoid long waiting
times. Our digital hospital system helps patients get
quick access to expert doctors.
</p>
<div className="mt-4">
<button
className="btn btn-success btn-lg me-3"
onClick={()=>navigate("/register")}
>
Patient Register
</button>
<button
className="btn btn-primary btn-lg me-3"
onClick={()=>navigate("/login")}
>
Patient Login
</button>
<button
className="btn btn-dark btn-lg"
onClick={()=>navigate("/admin-login")}
>
Admin Login
</button>
</div>
</div>
<div className="col-md-6 text-center">
<img
src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
alt="hospital"
className="img-fluid"
style={{maxWidth:"350px"}}
/>
</div>
</div>
</div>
<div className="container mt-4">
<h2 className="text-center text-primary mb-4">
Why Choose Our Hospital
</h2>
<div className="row text-center">
<div className="col-md-4 mb-3">
<div className="card shadow border-0 p-4">
<h4>🩺 Easy Booking</h4>
<p className="text-muted">
Patients can quickly book appointments online
without visiting the hospital.
</p>
</div>
</div>
<div className="col-md-4 mb-3">
<div className="card shadow border-0 p-4">
<h4>👨‍⚕️ Expert Doctors</h4>
<p className="text-muted">
Consult experienced doctors from multiple
medical departments.
</p>
</div>
</div>
<div className="col-md-4 mb-3">
<div className="card shadow border-0 p-4">
<h4>⚡ Fast Service</h4>
<p className="text-muted">
Reduce waiting time and manage hospital visits
efficiently.
</p>
</div>
</div>
</div>
</div>
<div className="container mt-5">
<div className="row text-center">
<div className="col-md-3">
<h2 className="text-primary fw-bold">50+</h2>
<p>Doctors</p>
</div>
<div className="col-md-3">
<h2 className="text-primary fw-bold">500+</h2>
<p>Patients</p>
</div>
<div className="col-md-3">
<h2 className="text-primary fw-bold">20+</h2>
<p>Departments</p>
</div>
<div className="col-md-3">
<h2 className="text-primary fw-bold">24/7</h2>
<p>Support</p>
</div>
</div>
</div>
<footer className="bg-dark text-white text-center mt-5 p-3">
<p className="mb-0">
© 2026 MediCare Hospital Appointment System
</p>
</footer>
</div>
)
}
export default Home