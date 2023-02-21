import {React} from 'react'
import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Tooltip, tooltipClasses} from '@mui/material'

const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 200,
    },
});

const Password = (props) => {

    function handleChange(e){
        props.setVal(e.target.value);
    }
    
    function handleSpaces(e){
    if(e.key===" ")
        e.preventDefault();
    }

    return (
        <CustomWidthTooltip arrow title={props.tooltipmsg}
       placement="right">
        <TextField
            required
            id="outlined-password"
            label={props.label}
            type="password"
            fullWidth
            value={props.val}
            margin="normal"
            onChange={(e)=>{handleChange(e)}}
            onKeyDown={(e)=>{handleSpaces(e)}}
        />
        </CustomWidthTooltip>
    )
}

export default Password
