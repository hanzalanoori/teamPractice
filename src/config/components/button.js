import Button from "@mui/material/Button";
import { deepOrange, deepPurple } from '@mui/material/colors';


function SMButton(props) {
  const { label, onClick , editicon , deleteicon} = props;
  return (
    <>
      <Button onClick={onClick} variant="contained" sx={{ bgcolor :'black', }} >
       {editicon ? editicon : ''} {deleteicon ? deleteicon : ''}{label}
      </Button>
    </>
  );
}
export default SMButton;
