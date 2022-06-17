import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainLayout from "./mainlayout";

function Dashboard() {
  const [user, setUser] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.user) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <MainLayout />
    </>
  );
}
export default Dashboard;
