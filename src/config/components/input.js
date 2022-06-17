import TextField from "@mui/material/TextField";

function SMInput(props) {
  const { label, type , change , value , variant } = props;
  return (
    <>
      <TextField
       
        id="outlined-basic"
        type={type}
        label={label}
        variant={variant ? variant : 'outlined'}
        onChange={change}
        value={value}
      />


    </>
  );
}
export default SMInput;
