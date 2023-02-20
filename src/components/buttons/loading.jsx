import React from 'react'
import {LoadingButton} from '@mui/lab';

const LoadingBtn = (props) => {
  return (
    <div className='common_btn' style={{margin:props.margin}}>
        <LoadingButton fullWidth loading variant="outlined">
            Submit
        </LoadingButton>
    </div>
  )
}

export default LoadingBtn
