import {React,useState} from 'react'
import { styled } from '@mui/material/styles';
import { TextField, Tooltip, tooltipClasses} from '@mui/material';
import { validatePass } from '../../utils/vallidate';

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 200,
  },
});

const ValPassword = (props) => {

  // const [val,setVal] = useState('');
  const [isValid,setValid] = useState(true);

  function handleChange(e) {
    let value = e.target.value;
    props.setVal(e.target.value);
    if(value!=='')
    setValid(validatePass(value));
  }

  function handleSpaces(e){
    if(e.key===" ")
      e.preventDefault();
  }

  let content;

  (isValid)?
    content = <CustomWidthTooltip title='' placement='right'><TextField
    required
    id="outlined-password-input"
    label={props.label}
    type="password"
    fullWidth
    value={props.val}
    margin="normal"
    onKeyDown={(e)=>{handleSpaces(e)}}
    onChange={(e)=>{handleChange(e)}}
    /></CustomWidthTooltip>
  : content = <CustomWidthTooltip arrow title="Password must contain atleast 8 characters including one uppercase, one lowercase, one number and a special character"
       placement="right"><TextField
      error
      required
      id="outlined-password-input"
      type="password"
      label="Password"
      value={props.val}
      margin="normal"
      fullWidth
      onKeyDown={(e)=>{handleSpaces(e)}}
      onChange={(e)=>{handleChange(e)}}
      /></CustomWidthTooltip>;

    return (
        <>
        {content}
        </>
    )
}

export default ValPassword
