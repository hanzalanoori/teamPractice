import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Box, CardActionArea, CardActions, Grid } from '@mui/material';
import SMButton from './button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Carddiv(props) {
  return (
<>


   <Grid xl={4}>
    
    <Card className="mb-4 mx-3">
      <CardActionArea>  
    
        <CardContent>
        <Avatar sx={{ bgcolor: 'black',
      marginLeft: 'auto',
      marginRight: 'auto',
     }}>{props.data.name[0]}</Avatar>   

          <Typography gutterBottom variant="h5" component="div">
            {props.data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.data.cnic}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.data.contact}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.data.classSession}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.data.section}
          </Typography>

       
       
        </CardContent>
        <CardActions>
       
        <Grid xl={6}>
          <Box sx={{ padding: 1 }}>
            <SMButton onClick={props.clickEdit} label="Edit" editicon={<EditIcon  />}  />
          </Box>
        </Grid>

        <Grid xl={6}>
          <Box sx={{ padding: 1 }}>
            <SMButton onClick={props.click} label="Delete" deleteicon={<DeleteIcon />} />
          </Box>
        </Grid>
       
      </CardActions>
      </CardActionArea>     
    </Card> 
       
    </Grid>

</>
  );
}