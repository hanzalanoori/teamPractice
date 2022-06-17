import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/dashboard";
import EditTeacher from "../../pages/editteacher";
import AddTeacher from "../../pages/form";
import Login from "../../pages/login";
import Teacher from "../../pages/teacher";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="/" element={<AddTeacher />} />
        <Route path="editteacher/:id" element={<EditTeacher />} />
        <Route path="teacher" element={<Teacher />} />
  
      </Routes>
    </Router>
  );
}
