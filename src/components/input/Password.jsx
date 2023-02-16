import {React,useState} from 'react'
import { styled } from '@mui/material/styles';
import { TextField, Tooltip, tooltipClasses} from '@mui/material';

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 200,
  },
});

const Password = () => {

  const [val,setVal] = useState('');
  const [isValid,setValid] = useState(true);

  function handleChange(e) {
    let value = e.target.value;
    setVal(value.trim())
    if(value!=='')
    setValid(value.match(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    ));
  }

  let content;

  (isValid)?
    content = <CustomWidthTooltip title='' placement='right'><TextField
    required
    id="outlined-password-input"
    label="Password"
    type="password"
    autoComplete="current-password"
    fullWidth
    value={val}
    onChange={(e)=>{handleChange(e)}}
    /></CustomWidthTooltip>
  : content = <CustomWidthTooltip arrow title="Password must contain atleast 8 characters including one uppercase, one lowercase, one number and a special character"
       placement="right"><TextField
      error
      required
      id="outlined-password-input"
      type="password"
      label="Password"
      value={val}
      fullWidth
      onChange={(e)=>{handleChange(e)}}
      /></CustomWidthTooltip>;

    return (
        <>
        {content}
        </>
    )
}

export default Password
