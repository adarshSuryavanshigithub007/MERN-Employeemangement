import { Button, Grid, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { addUser } from '../service/api';
import swal from 'sweetalert'
const Adduser = () => {
    const initialFormData = {
        name: "",
        username: "",
        email: "",
        mobile: ""
    }
    const [formdata, setFormData] = useState(initialFormData)
    const handleChangeFormData = (event, fieldName) => {
        const updateName = event.target.value
        setFormData((params) => ({ ...params, [fieldName]: updateName }))
    }

    const submitData = () => {
        try {
            swal({
                title: "Good job!",
                text: "You New user added!",
                icon: "success",
                button: "Aww yiss!",
            });
            addUser(formdata)
            setFormData(initialFormData)
        } catch (error) {
            console.log(error)
        }
    }
    const formDataValidation = () => {
        for (const key in formdata) {
            if (formdata[key] !== "") {
                return false
            }
            return true
        }
    }
    const resetFormData = () => {
        setFormData(initialFormData)
    }
    return (
        <Grid marginTop={7}>
            <Paper sx={{ maxWidth: 800, margin: 'auto', textAlign: 'center', paddingTop: 0, paddingBottom: 3 }}>
                <div style={{ color: 'green', fontSize: '12px' }}> <h1><PersonAddIcon fontSize='medium' />Add New User</h1></div>
                <Grid container spacing={3}>
                    <Grid item md={12}>
                        <Grid container justifyContent="center" alignItems="center" padding={3} spacing={5}>
                            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <Grid item xs={12} md={3} display="flex" alignItems="baseline">
                                    Name
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <TextField variant="filled" label="Name" fullWidth value={formdata.name} onChange={(e) => handleChangeFormData(e, "name")} />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <Grid item xs={12} md={3} display="flex" alignItems="baseline">
                                    userName
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <TextField variant="filled" label="Name" fullWidth value={formdata.username} onChange={(e) => handleChangeFormData(e, "username")} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center" alignItems="center" padding={3} spacing={5}>
                            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <Grid item xs={12} md={3} display="flex" alignItems="baseline">
                                    Email
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <TextField variant="filled" label="Email" fullWidth value={formdata.email} onChange={(e) => handleChangeFormData(e, "email")} />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <Grid item xs={12} md={3} display="flex" alignItems="baseline">
                                    Mobile
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <TextField variant="filled" label="Mobile" fullWidth value={formdata.mobile} onChange={(e) => handleChangeFormData(e, "mobile")} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid sx={{ display: 'flex', justifyContent: 'center' }} >
                            <div style={{ color: 'green', fontSize: '12px', marginRight: '12px' }}>
                                <Button variant='contained' color='primary' onClick={submitData} disabled={formDataValidation()}>Submit</Button>
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

export default Adduser