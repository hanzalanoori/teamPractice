import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SMButton from "../config/components/button";
import SMInput from "../config/components/input";
import { deleteData, getData } from "../config/firebase/firebasemethods";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { set } from "firebase/database";
import Carddiv from "../config/components/card";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import loadarImg from './../assets/img/loader.gif';

function Teacher() {
  const [loader, setLoader] = useState(true);
  const [teacher, setTeacher] = useState([]);
  const navigate = useNavigate();

  const getTeacher = () => {
    setLoader(true);
    getData('teachers').then((success) => {
         setTeacher(success);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  };


  // const clickToNews = (item) => {
  //   navigate("/onenews", {
  //     state: item,
  //   });
  //   console.log(item);
  // };

  useEffect(() => {
    getTeacher();
  }, []);



  const deleteTeacher = (data) => {
  
    deleteData('teachers',data).then((success) => {
      toast("Data Deleted Successfully!");
      getTeacher();
     }).catch((error) => {
       toast(error);
     //  console.log(error)
     })
    
   };


   
  const editTeacher = (data) => {


    navigate(`/editTeacher/${data}`);
  
    // deleteData('teachers',data).then((success) => {
    // console.log(success)
    //   toast("Data Deleted Successfully!");
    //   getTeacher();
    //  }).catch((error) => {
    //    toast(error);
    //  //  console.log(error)
    //  })
    
   };


 

 
 

 
  return (
    <>
     
     <Grid container>
        <Grid className="mb-5" xl={12} sx={{backgroundColor:'black',padding:'25px 0px 25px 0px',color:'white'}}>
           <Typography variant="h6"><SupervisedUserCircleIcon /> Teacher Panel</Typography>
        </Grid>
      </Grid>  
     
     
     
      <Container>
      {loader ? (
        <Box>
          <img
            src={loadarImg}
          />
        </Box>
      ) :  (

    
      <Grid container>
      <Grid xl={12}>     
      </Grid>
      {teacher.map(function(data, Index){
         return (<Carddiv data={data} index={Index} key={Index} click={() => deleteTeacher(data.id)} clickEdit={() => editTeacher(data.id) } /> )
       })} 
    
      <ToastContainer />
      </Grid>
       )} 
      </Container>
    </>
  );
}
export default Teacher;
