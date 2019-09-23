import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import {AccountCircle,Email,Phone,Send,Message} from '@material-ui/icons';
import Button from '@material-ui/core/Button';
const componCotactUs = (props) => {
  return (
    <div>
    <Dialog
        open={props.Open}
        disableBackdropClick={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div style={{display:'flex',flexDirection:'column'}}>
            <div style={{height:'7vh',
            background:'#b87106',
            color:'white',
            justifyContent:'center',
            alignItems:'center',
            display:'flex',
            flexDirection:'row'}}>
      <div style={{width:'90%',textAlign:'center'}}>
          <strong style={{fontSize:'1.7rem',marginLeft:'5%'}}>GET IN TOUCH WITH US</strong>
      </div>
      <div style={{width:'10%'}}>
          <CloseIcon onClick={props.Close}/>
      </div>
      
            </div>
        </div>
        <div style={{margin:'1rem'}}>


        <div>
        <TextField
        style={{margin:'5%',width:'90%'}}
        id="input-with-icon-textfield"
        label="Your Name (Required)"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
        </div>

        <div>
        <TextField
       style={{margin:'5%',width:'90%'}}
        id="input-with-icon-textfield"
        label="Email (Required)"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          ),
        }}
      />
        </div>
        <div>
        <TextField
        style={{margin:'5%',width:'90%'}}
        id="input-with-icon-textfield"
        label="Phone  (Required)"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Phone />
            </InputAdornment>
          ),
        }}
      />
        </div>
        <div>
        <TextField
          multiline
          rowsMax="3"
        style={{margin:'5%',width:'90%'}}
        id="input-with-icon-textfield"
        label="Message  (Required)"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Message />
            </InputAdornment>
          ),
        }}
      />
        </div>
        <div style={{height:'8vh',display:'flex',justifyContent:'center'}}>
        <Button style={{height:'40px',background:'#b87106'}} variant="contained">
        <strong style={{fontSize:'1rem',color:'white'}}>Send Message</strong>
        <Send style={{marginLeft:'20px',color:'white'}}/>
      </Button>
        </div>

        </div>

      </Dialog>
    </div>
  )
}

export default componCotactUs
