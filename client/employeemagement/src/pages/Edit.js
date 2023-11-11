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
import { useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
const Edit = () => {
  const { id } = useParams()

  const [userlist, setUserList] = useState("");
  const [fullname, setFullName] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("")
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("")
  const [date, setDate] = useState("");
  const [state, setState] = useState("")
  const [district, setDistrict] = useState("")
  const [address, setAddress] = useState("");
  const [dept, setDept] = useState("")
  const [photo, setPhoto] = useState("")
  console.log(userlist.photo)
  const getalluser = () => {
    let url = "http://localhost:8000/userlist/" + id
    const postdata = { method: "PUT" }
    fetch(url, postdata)
      .then(response => response.json())
      .then(productArray => {
        setUserList(productArray);
      })
  }
  useEffect(() => {
    setName(userlist.name)
    setFullName(userlist.fullname)
    setEmail(userlist.email)
    setMobile(userlist.mobile)
    setAddress(userlist.address)
    setDate(userlist.dof)
    setState(userlist.state)
    setDistrict(userlist.district)
    setDept(userlist.department)
    setPhoto(userlist.photo)
    setStatus(userlist.status)
    setGender(userlist.gender)
  }, [])
  useEffect(() => {
    getalluser()
  }, [id])
  const handleChangeName = (event) => {
    setName(event.target.value)
  }
  const handleChangeFullName = (event) => {
    setFullName(event.target.value)
  }
  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const handleChangeMobile = (event) => {
    setMobile(event.target.value)
  }
  const handleChangeAddress = (event) => {
    setAddress(event.target.value)
  }
  const handleChangeDate = (event) => {
    setDate(event.target.value)
  }
  const handleChangeState = (event) => {
    setState(event.target.value)
  }
  const handleChangeDistrict = (event) => {
    setDistrict(event.target.value)
  }
  const handleChangeStatus = (event) => {
    setStatus(event.target.value)
  }
  const handleChangeDept = (event) => {
    setDept(event.target.value)
  }
  const handleChangeGender = (event) => {
    setGender(event.target.value)
  }
  const handleChangePhoto = (event) => {
    setPhoto(event.target.value)
  }
  const save=()=>{
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
      "photo": photo
    }
    let url = "http://localhost:8000/userlist/" + id; 
    axios.patch(url,newData).then((response) => {
      console.log(response)
    }) 
  }

  const reset = () => {
    setName("")
    setFullName("")
    setEmail("")
    setMobile("")
    setAddress("")
    setDate("")
    setState("")
    setDistrict("")
    setDept("")
    setPhoto("")
    setStatus("")
    setGender("")
  }

  return (
    <>
      <Grid item xs={12} md={12} >
        <Grid sx={{ textAlign: 'center', color: 'green', fontSize: 18 }}>
          <h3 >Edit User</h3>
        </Grid>
      </Grid>
      <Box sx={{ width: "50%", margin: "auto", marginTop: 5, }}>
        <Paper>
          <Grid container spacing={3} padding={1}>
            <Grid item xs={12} md={12} >
              <Grid align='center'>
                <Avatar src={photo} sx={{ width: 46, height: 46, marginTop: "-45px" }} />
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} >
              <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField variant="standard" fullWidth type='text' placeholder='Name' value={name} onChange={handleChangeName} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                <GroupIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField variant="standard" fullWidth type='text' placeholder='FullName' value={fullname} onChange={handleChangeFullName} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }} >
                <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField placeholder="Email" variant="standard" fullWidth type='email' value={email} onChange={handleChangeEmail} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                <PhoneIphoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField variant="standard" fullWidth type='number' placeholder='mobile Number' value={mobile} onChange={handleChangeMobile} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                <CircleNotificationsIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField placeholder="Status" variant="standard" fullWidth value={status} onChange={handleChangeStatus} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                <AirlineSeatReclineNormalIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField variant="standard" fullWidth placeholder='department' value={dept} onChange={handleChangeDept} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} textAlign='center'>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                <WcSharpIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <FormControl variant="standard" sx={{ m: 1, }} fullWidth >
                  <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Age"
                    value={gender}
                    onChange={handleChangeGender}

                  >
                    <MenuItem value="MALE">Male</MenuItem>
                    <MenuItem value="FEMALE">Female</MenuItem>
                    <MenuItem value="TRANSGENDER">Trangender</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                <CalendarMonthSharpIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField type='date' variant="standard" fullWidth placeholder='Date of Birth' value={date} onChange={handleChangeDate} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                <FmdGoodIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField variant="standard" fullWidth placeholder='state' value={state} onChange={handleChangeState} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                <FmdGoodIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField variant="standard" fullWidth placeholder='district' value={district} onChange={handleChangeDistrict} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                <AddLocationAltIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField variant="standard" fullWidth placeholder='Address' value={address} onChange={handleChangeAddress} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: 2 }}>
                <CameraAltIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField variant="standard" fullWidth placeholder='Image link' value={photo} onChange={handleChangePhoto} />
              </Box>
            </Grid>
            <Grid container mt={5}>
              <Grid item xs={6} md={6} >
                <Grid align='center'>
                  <Button variant='contained' color='primary' onClick={save}>Submit</Button>
                </Grid>
              </Grid>
              <Grid item xs={6} md={6} >
                <Grid align='center'>
                  <Button variant='contained' color='warning' onClick={reset}>Reset</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>

    </>
  )
}

export default Edit