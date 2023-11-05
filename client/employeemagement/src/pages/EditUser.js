import React, { useEffect, useState } from 'react'
import { addUser, getUser } from '../service/api'
import swal from 'sweetalert'
import { Button, Grid, Paper, TextField } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import { Navigate, useParams } from 'react-router-dom';
const EditUser = () => {
  const { id } = useParams();
  const initialFormData = {
    name: "",
    username: "",
    email: "",
    mobile: ""
  }

  const [user, setUser] = useState(initialFormData)
  const loadUserDetails = async () => {
    const response = await getUser(id)
    setUser(response.data)
  }
  console.log(user)
  useEffect(() => {
    loadUserDetails()
  }, [])
  const handleChangeFormData = (event, fieldName) => {
    const updateName = event.target.value
    setUser((params) => ({ ...params, [fieldName]: updateName }))
  }

  const submitData = async () => {
    try {
      swal({
        title: "Good job!",
        text: "You New user added!",
        icon: "success",
        button: "Aww yiss!",
      });
      await addUser(user)
      setUser(initialFormData)

    } catch (error) {
      console.log(error)
    }

  }
  const resetFormData = () => {

  }
  return (
    <Grid marginTop={7}>
      <Paper sx={{ maxWidth: 800, margin: 'auto', textAlign: 'center', paddingTop: 0, paddingBottom: 3 }}>
        <div style={{ color: 'green', fontSize: '12px' }}> <h1><EditIcon fontSize='medium' />Edit Add New User</h1></div>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Grid container justifyContent="center" alignItems="center" padding={3} spacing={5}>
              <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Grid item xs={12} md={3} display="flex" alignItems="baseline">
                  Name
                </Grid>
                <Grid item xs={12} md={9}>
                  <TextField variant="filled" placeholder="Name" fullWidth value={user.name} onChange={(e) => handleChangeFormData(e, "name")} />
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Grid item xs={12} md={3} display="flex" alignItems="baseline">
                  userName
                </Grid>
                <Grid item xs={12} md={9}>
                  <TextField variant="filled" placeholder="Name" fullWidth value={user.username} onChange={(e) => handleChangeFormData(e, "username")} />
                </Grid>
              </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="center" padding={3} spacing={5}>
              <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Grid item xs={12} md={3} display="flex" alignItems="baseline">
                  Email
                </Grid>
                <Grid item xs={12} md={9}>
                  <TextField variant="filled" placeholder="Email" fullWidth value={user.email} onChange={(e) => handleChangeFormData(e, "email")} />
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Grid item xs={12} md={3} display="flex" alignItems="baseline">
                  Mobile
                </Grid>
                <Grid item xs={12} md={9}>
                  <TextField variant="filled" placeholder="Mobile" fullWidth value={user.mobile} onChange={(e) => handleChangeFormData(e, "mobile")} />
                </Grid>
              </Grid>
            </Grid>
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} >
              <div style={{ color: 'green', fontSize: '12px', marginRight: '12px' }}>
                <Button variant='contained' color='primary' onClick={submitData} >Submit</Button>
              </div>
              <div style={{ color: 'green', fontSize: '12px' }}>
                <Button variant='contained' color='warning' onClick={resetFormData} >Reset</Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default EditUser