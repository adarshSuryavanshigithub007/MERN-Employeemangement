import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar, Button,TextField, Typography } from '@mui/material';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import axios from 'axios';
const Register = () => {
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validate, setValidate] = useState(true)
    const [validPassword, setValidPassword] = useState(false);


    const Submit = () => {
        try {

            let url = "http://localhost:8000/customerlogin"
            let newData = {
                "username": username,
                "email": email,
                "password": password,
                // "photo": photo
            }
            axios.post(url, newData)
                .then(response => {
                    console.log(response.data)
                })
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
            setValidate(false)
        }
    }

    const handleChangeEmail = (event) => {
        const newEmail = event.target.value
        setEmail(newEmail)
        const isValidate = validateEmail(newEmail)
        setValidate(isValidate)
    }
    const validateEmail = (email) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailPattern.test(email);
    }

    const handleChangePassword = (e) => {
        const newPassword = e.target.value
        setPassword(newPassword)
        const isValidate = validatePassword(newPassword)
        setValidPassword(isValidate)
    }

    const validatePassword = (password) => {
        const uppercasePattern = /[A-Z]/;
        const specialCharPattern = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
        return uppercasePattern.test(password) && specialCharPattern.test(password)
    }

    return (
        <Grid container sx={{ justifyContent: 'center', marginTop: '60px', }}>
            <Paper elevation={5} sx={{ height: 'autov ', width: "300px", textAlign: 'center', }} square={false}>
                <Grid align='center' sx={{ marginTop: '-16px' }} >
                    <Avatar sx={{ backgroundColor: 'green' }} ><LockPersonIcon /></Avatar>
                </Grid>
                <Typography variant='h6' sx={{ fontWeight: "bold" }}   >Register </Typography>
                <Grid sx={{ margin: '10px' }}>
                    <TextField
                        fullWidth
                        id="standard-basic" label="User Name" variant="outlined" size='small'
                        onChange={Obj => setUserName(Obj.target.value)}
                        sx={{ marginBottom: '20px' }}
                    />
                    <TextField
                        fullWidth
                        id="standard-basic" label="Email" type='email' variant="outlined" size='small'
                        onChange={handleChangeEmail}
                        value={email}
                        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
                        required
                        error={!validate}
                        helperText={!validate ? "Please enter a valid email address." : null}
                        sx={{ marginBottom: '20px' }}
                    />
                    {/* {!validate && <p className="error">Please enter a valid email address.</p>} */}

                    <TextField
                        label="Password"
                        fullWidth
                        value={password}
                        required
                        error={!validPassword}
                        helperText={!validPassword ? 'Password must contain at least one uppercase letter and one special character' : ''}
                        onChange={handleChangePassword}
                        id="standard-basic" type='password' variant="outlined" size='small'
                        sx={{ marginBottom: '20px' }}
                    />
                    {validPassword && (
                        <Button variant='contained' color='error' endIcon={<VpnKeyIcon />} onClick={Submit} >Register</Button>
                    )}
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Register