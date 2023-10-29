import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
    let [fullname, pickName] = useState("");
    let [emailid, pickEmail] = useState("");
    let [password, pickPassword] = useState("");
    let [message, updateMessage] = useState("");
    let[username, pickUsername] = useState("");
    let[mypassword, pickMypassword] = useState("");

    const handleChangeName = (e)=>{
        pickName(e.target.value)
    }
    const handleChangePassword = (e) => {
       pickPassword(e.target.value)
       
    }
    const handleChangeEmail = (event) => {
        pickEmail(event.target.value)
       
    }
    const Submit = () => {
        let url = "http://localhost:8000/account";
        let userdata = {username:fullname, email:emailid, password:password};
        let postdata = {
            headers:{'Content-Type':'application/json'},
            method:"POST",
            body:JSON.stringify(userdata)
        };
        fetch(url, postdata)
        .then(response=>response.json())
        .then(userinfo=>{
            updateMessage("Account Created. Please Login");
            pickName(""); pickEmail(""); pickPassword("");
        })
    }
    const save = ()=>{
        let url = "http://localhost:8000/account";
        let userdata = {email:username, password:mypassword};
        let postdata = {
            headers:{'Content-Type':'application/json'},
            method:"PUT",
            body:JSON.stringify(userdata)
        };
        fetch(url, postdata)
        .then(response=>response.json())
        .then(userinfo=>{
            if(userinfo.length>0){
                localStorage.setItem("adminid", userinfo[0]._id);
                localStorage.setItem("adminname", userinfo[0].username);
                window.location.reload();
            }else{
                alert("Invalid or Not Exists !");
            }
        })
    }
    return (
        <Grid container >
            <Grid xs={12} md={6} >
                <Grid container sx={{ justifyContent: 'center', display: "flex", marginTop: '60px', }}>

                    <Paper elevation={5} sx={{ height: 'autov ', width: "300px", textAlign: 'center', }} square={false}>
                        <Grid align='center' sx={{ marginTop: '-16px' }} >
                            <Avatar sx={{ backgroundColor: 'green' }} ></Avatar>
                        </Grid>
                        <Typography variant='h6' sx={{ fontWeight: "bold" }} >Login </Typography>
                        <Grid sx={{ margin: '10px' }}>

                            <TextField
                                fullWidth
                                id="standard-basic" label="Email" type='email' variant="outlined" size='small'
                                onChange={obj=>pickUsername(obj.target.value)}
                                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"

                                sx={{ marginBottom: '20px' }}
                            />


                            <TextField
                                label="Password"
                                fullWidth
                                onChange={obj=>pickMypassword(obj.target.value)}
                                id="standard-basic" type='password' variant="outlined" size='small'
                                sx={{ marginBottom: '20px' }}
                            />

                            <Button variant='contained' color='error' onClick={save}>Login</Button>
                            <p sx={{color:'red'}}>  <span color='red'>{message}</span></p>
                        </Grid>
                    </Paper>
                </Grid></Grid>
              
            <Grid xs={12} md={6}>
                <Grid container sx={{ justifyContent: 'center', marginTop: '60px', }}>
                    <Paper elevation={5} sx={{ height: 'autov ', width: "300px", textAlign: 'center', }} square={false}>
                        <Grid align='center' sx={{ marginTop: '-16px' }} >
                            <Avatar sx={{ backgroundColor: 'green' }} ></Avatar>
                        </Grid>
                        <Typography variant='h6' sx={{ fontWeight: "bold" }}   >Register </Typography>
                        <Grid sx={{ margin: '10px' }}>
                            <TextField
                                fullWidth
                                value={fullname}
                            onChange={handleChangeName}
                                id="standard-basic" label="User Name" variant="outlined" size='small'
                                sx={{ marginBottom: '20px' }}
                            />
                            <TextField
                                fullWidth
                                id="standard-basic" label="Email" type='email' variant="outlined" size='small'
                                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
                                sx={{ marginBottom: '20px' }}
                                onChange={handleChangeEmail}
                                value={emailid}
                            />
                            {/* {!validate && <p className="error">Please enter a valid email address.</p>} */}

                            <TextField
                                label="Password"
                                fullWidth
                                value={password}
                                required
                                onChange={handleChangePassword}
                                id="standard-basic" type='password' variant="outlined" size='small'
                                sx={{ marginBottom: '20px' }}
                            />

                            <Button variant='contained' color='error'  onClick={Submit} >Register</Button>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid></Grid>
    )
}

export default Login