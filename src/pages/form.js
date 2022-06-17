import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SMButton from "../config/components/button";
import SMInput from "../config/components/input";
import { sendData } from "../config/firebase/firebasemethods";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { set } from "firebase/database";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import loadarImg from './../assets/img/loader.gif';

function AddTeacher() {

  const [name,setName] = useState(null);
  const [cnic,setCnic] = useState(null);
  const [contact,setContact] = useState(null);
  const [classSession,setClassSession] = useState(null);
  const [section,setSection] = useState(null);
  const [error,setError] = useState(null);

  const obj = {
   name,
   cnic,
   contact,
   classSession,
   section
}
  const navigate = useNavigate();


  const validate = () => {
    if(!name){
      toast("Name filled is Empty");
    }
    if(!cnic){
      toast("Cnic filled is Empty");
    } 
    
    if(cnic < 13){
      toast("Cnic filled must be 13 Digits");
    }

    if(!contact){
      toast("Contact filled is Empty");
    }
    
    if(contact < 11){
      toast("Cnic filled must be 11 Digits");
    }

    if(!classSession){
      toast("class filled is Empty");
    }
    if(!section){
      toast("Section filled is Empty");
    }

    if(!name || !cnic || cnic < 13 || !contact || contact < 11 || !classSession || !section){
      return false;  
    }else{
      return true;
    }
  }

  const SubmitTeacher = () => {
     
   if(validate()){

    sendData(obj,'teachers').then((success) => {
      toast("Data Inserted Successfully!");
       navigate("/teacher");
      // setName(null); setCnic(null); setContact(null); setClasss(null); setSection(null);
    }).catch((error) => {
      toast(error);
    })
 }
  };
  return (
    <>
         
      <Grid container>
        <Grid className="mb-5" xl={12} sx={{backgroundColor:'black',padding:'25px 0px 25px 0px',color:'white'}}>
           <Typography variant="h6"><SupervisedUserCircleIcon /> Add Teacher</Typography>
        </Grid>
      </Grid>  
     
      <Grid xl={12}>
   
      <Box>
        <Box sx={{ padding: 1 }}>
          <SMInput label="name" type="text" change={e => { setName(e.target.value); }} />
        </Box>
        <Box sx={{ padding: 1 }}>
          <SMInput label="Cnic" type="number" change={e => { setCnic(e.target.value); }} />
        </Box>
        <Box sx={{ padding: 1 }}>
          <SMInput label="contact" type="number" change={e => { setContact(e.target.value); }} />
        </Box>
        <Box sx={{ padding: 1 }}>
          <SMInput label="class" type="text"  change={e => { setClassSession(e.target.value); }}/>
        </Box>
        <Box sx={{ padding: 1 }}>
          <SMInput label="section" type="text" change={e => { setSection(e.target.value); }}/>
        </Box>
       
        <Box sx={{ padding: 1 }}>
          <SMButton onClick={() => SubmitTeacher()} label="Submit" />
        </Box>
      </Box>
      <ToastContainer />
      </Grid>

      
    </>
  );
}
export default AddTeacher;
