import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import LoginIcon from '@mui/icons-material/Login';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Grid container sx={{ justifyContent: 'center', marginTop: '60px', }}>
            <Paper elevation={5} sx={{ height: '300px', width: "300px", textAlign: 'center', }} square={false}>
                <Grid align='center' sx={{ marginTop: '-16px' }} >
                    <Avatar sx={{ backgroundColor: 'green' }}><LockPersonIcon /></Avatar>
                </Grid>
                <Typography variant='h6' sx={{ fontWeight: "bold" }}>Login </Typography>
                <Grid sx={{ margin: '10px' }}>
                    <TextField
                        fullWidth
                        id="standard-basic" label="Email" variant="standard" size='medium'
                        sx={{ marginBottom: '20px' }}
                    />
                    <FormControl variant="standard" fullWidth sx={{ marginBottom: '20px' }}>
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Button variant='contained' color='error' endIcon={<LoginIcon />}>Login</Button>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Login