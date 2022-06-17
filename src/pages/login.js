import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import SMButton from "../config/components/button";
import SMInput from "../config/components/input";

function Login() {
  const navigate = useNavigate();
  const loginUser = () => {
    console.log("User Click Login");
    navigate("/", {
      state: {
        user: true,
      },
    });
  };
  return (
    <>
      <Box>
        <Box sx={{ padding: 1 }}>
          <SMInput label="Email" type="email" />
        </Box>
        <Box sx={{ padding: 1 }}>
          <SMInput label="Password" type="password" />
        </Box>
        <Box sx={{ padding: 1 }}>
          <SMButton onClick={loginUser} label="Login" />
        </Box>
      </Box>
    </>
  );
}
export default Login;
