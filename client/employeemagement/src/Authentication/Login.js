import React, { useState } from "react";
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { getAdminLogin, getUserLogin } from "../service/api";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [formDataChange, setFormDataChangeChange] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [userLoginCheck, setLoginUserCheck] = useState(false);
  const [adminLoginCheck, setLoginAdminCheck] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  console.log(formDataChange);
  console.log(adminLoginCheck);
  const userLoginCheckBox = (event) => {
    setLoginUserCheck(event.target.checked);
  };
  const cridentials = {
    email: formDataChange.email,
    password: formDataChange.password,
  };
  console.log(cridentials);
  const adminLoginCheckBox = (event) => {
    setLoginAdminCheck(event.target.checked);
  };
  const loginSubmit = async () => {
    if (userLoginCheck === true) {
      const cridentials = {
        email: formDataChange.email,
        password: formDataChange.password,
      };
      console.log(cridentials);
      try {
        const response = await getUserLogin(cridentials);
        // Handle the response, e.g., update UI or set user state.
        console.log(response.data.user);
        const id = response.data.user._id
        console.log(id)
        localStorage.setItem("userId",id)
        toast.success(` User  Login Successfull`);
        navigate('/')
        window.location.reload()
      } catch (error) {
        console.log(error.response.data.message)
        toast.error(` User ${error.response.data.message}`);
      }
      console.log("user");
    } else if (adminLoginCheck === true) {
      try {
        const response = await getAdminLogin(cridentials);
        // Handle the response, e.g., update UI or set user state.
        console.log(response);
        toast.success(`Admin ${response.data.message}`);
        const id = response.data.admin._id
        console.log(id)
        localStorage.setItem("adminId",id)
        navigate('/')
        window.location.reload()
      } catch (error) {
        console.log(error);
        toast.error(`Admin ${error.response.data.message}`);
      }
    }
  };

  const handleChangeEmail = (event) => {
    const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
    // Check if the entered email matches the pattern
    const isValidationEmail = emailPattern.test(event.target.value);
    setIsValidEmail(isValidationEmail);
    setFormDataChangeChange((params) => ({
      ...params,
      email: event.target.value,
    }));
  };
  const handleChangePassWord = (event) => {
    const passwordPattern =
      /^(?=.*[A-Z])(?=(?:.*\d){3})(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/;
    const isValidationPassword = passwordPattern.test(event.target.value);
    setIsValidPassword(isValidationPassword);
    setFormDataChangeChange((params) => ({
      ...params,
      password: event.target.value,
    }));
  }; 

  return (
    <Grid xs={12} md={6}>
      <Grid
        container
        sx={{ justifyContent: "center", display: "flex", marginTop: "60px" }}
      >
        <Paper
          elevation={5}
          sx={{ height: "autov ", width: "300px", textAlign: "center" }}
          square={false}
        >
          <Grid align="center" sx={{ marginTop: "-16px" }}>
            <Avatar sx={{ backgroundColor: "green" }}></Avatar>
          </Grid>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Login{" "}
          </Typography>
          <Grid
            align="center"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={userLoginCheckBox}
                    value={userLoginCheck}
                  />
                }
                label="User"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={adminLoginCheckBox}
                    value={adminLoginCheck}
                  />
                }
                label="Admin"
              />
            </FormGroup>
          </Grid>
          <Grid sx={{ margin: "10px" }}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Email"
              type="email"
              variant="outlined"
              size="small"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
              sx={{ marginBottom: "20px" }}
              onChange={handleChangeEmail}
              error={!isValidEmail}
              helperText={!isValidEmail ? "invalid EmailId" : null}
            />
            <TextField
              label="Password"
              fullWidth
              id="standard-basic"
              type="password"
              variant="outlined"
              size="small"
              sx={{ marginBottom: "20px" }}
              onChange={handleChangePassWord}
              pattern="^(?=.*[A-Z])(?=(?:.*\d){3})(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$"
              error={!isValidPassword}
              helperText={
                !isValidPassword
                  ? "Should be one capital letter, three numbers, and one special character"
                  : null
              }
            />
            <Button
              variant="contained"
              color="error"
              onClick={loginSubmit}
              disabled={
                (userLoginCheck === true && adminLoginCheck === true) ||
                (userLoginCheck === false && adminLoginCheck === false)
              }
            >
              Login
            </Button>
            <p sx={{ color: "red" }}>
              {"Register"}

              <Link to={"/register"}>Register</Link>
            </p>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
