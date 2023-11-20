import { Avatar, Box, Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WcSharpIcon from '@mui/icons-material/WcSharp';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import axios from 'axios';
import swal from 'sweetalert';
import { addUser } from '../service/api';
const AddNewUser = () => {
  const [name, UpadateName] = useState("");
  const [fullname, UpdateFullName] = useState("")
  const [email, UpadteEmail] = useState("");
  const [mobile, UpdateMobile] = useState("")
  const [status, UpadteStatus] = useState("");
  const [gender, UpdateGender] = useState("")
  const [date, UpadteDate] = useState("");
  const [state, UpdateState] = useState("")
  const [district, UpdateDistrict] = useState("")
  const [address, UpadteAddress] = useState("");
  const [dept, UpdateDept] = useState("")

  const submit = () => {
    let newData = {
      "name": name,
      "fullname": fullname,
      "mobile": mobile,
      "gender": gender,
      "email": email,
      "dof": date,
      "state": state,
      "district": district,
      "department": dept,
      "address": address,
      "status": status,

    }
    addUser(newData)
    swal(name, "save successfully", "success")
    .catch((error)=>{
      if(error.response){
        if(error.response.status===400){
          const validationErrors = error.response.data.errors;
          // Display validation errors to the user, e.g., set state or show an alert
          alert(`Validation errors:\n${JSON.stringify(validationErrors, null, 2)}`);
        }else{
          console.error(error.response.data);
        }
      }else{
        console.error('Network error:', error.message);
      }
    })   
  }

  useEffect(()=>{
    UpadateName('')
    UpadteAddress('')
    UpadteDate('')
    UpadteEmail('')
    UpdateGender('')
    UpdateDept('')
    UpdateDistrict('')
    UpdateState('')

    UpdateMobile('')
    UpadteStatus('')
  },[1])
  return (
    <>
      <Grid item xs={12} md={12} >
        <Grid sx={{ textAlign: 'center', color: 'green', fontSize: 18 }}>
          <h3 >AddNewUser</h3>
        </Grid>
      </Grid>
      <Box sx={{ width: "50%", margin: "auto", marginTop: 5, }}>
        <Paper>
          <Grid container spacing={3} padding={1}>
            <Grid item xs={12} md={6} >
              <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField label="Name" variant="standard" fullWidth type='text' onChange={obj => UpadateName(obj.target.value)} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                <GroupIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField label="FullName" variant="standard" fullWidth type='text' onChange={obj => UpdateFullName(obj.target.value)} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField label="Email" variant="standard" fullWidth type='email' onChange={obj => UpadteEmail(obj.target.value)} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                <PhoneIphoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField label="Mobile number" variant="standard" fullWidth type='number' onChange={obj => UpdateMobile(obj.target.value)} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                <CircleNotificationsIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField label="Status" variant="standard" fullWidth onChange={obj => UpadteStatus(obj.target.value)} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                <AirlineSeatReclineNormalIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField label='Department' variant="standard" fullWidth onChange={obj => UpdateDept(obj.target.value)} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} textAlign='center'>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                <WcSharpIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <FormControl variant="standard" sx={{ m: 1, }} fullWidth>
                  <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Age"
                    onChange={obj => UpdateGender(obj.target.value)} >
                    <MenuItem value={null}>----</MenuItem>
                    <MenuItem value="MALE">Male</MenuItem>
                    <MenuItem value="FEMALE">Female</MenuItem>
                    <MenuItem value="TRANSGENDER">Trangender</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                <CalendarMonthSharpIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField type='date' variant="standard" fullWidth onChange={obj => UpadteDate(obj.target.value)} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                <FmdGoodIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField label='State' variant="standard" fullWidth onChange={obj => UpdateState(obj.target.value)} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                <FmdGoodIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField label='district' variant="standard" fullWidth onChange={obj => UpdateDistrict(obj.target.value)} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                <AddLocationAltIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField label='Addess' variant="standard" fullWidth onChange={obj => UpadteAddress(obj.target.value)} />
              </Box>
            </Grid>
            <Grid item xs={12} md={12} >
              <Grid align='center'>
                <Button variant='contained' color='primary' onClick={submit} >Submit</Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>

    </>
  )
}

export default AddNewUser