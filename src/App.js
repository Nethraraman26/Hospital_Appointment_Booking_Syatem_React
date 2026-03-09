import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Doctors from "./components/Doctors";
import BookAppointment from "./components/BookAppointment";
import Appointments from "./components/Appointments";
import AdminLogin from "./admin/AdminLogin";
import AdminDoctors from "./admin/AdminDoctors";
import AdminAppointments from "./admin/AdminAppointments";
import Register from "./patient/Register";
import Login from "./patient/Login";
function App() {
return (
<Router>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/doctors" element={<Doctors/>}/>
<Route path="/book" element={<BookAppointment/>}/>
<Route path="/appointments" element={<Appointments/>}/>
<Route path="/admin-login" element={<AdminLogin/>}/>
<Route path="/admin" element={<AdminDoctors/>}/>
<Route path="/admin-appointments" element={<AdminAppointments />} />
<Route path="/register" element={<Register/>}/>
<Route path="/login" element={<Login/>}/>
</Routes>
</Router>
)
}
export default App