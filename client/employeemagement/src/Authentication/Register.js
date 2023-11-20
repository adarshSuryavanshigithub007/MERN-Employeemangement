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
    import { getAdminLogin, getUserLogin, getUserRegister } from "../service/api";
    import swal from "sweetalert";
    import { toast } from "react-toastify";
    import { Link } from "react-router-dom";
    const Register = () => {
    const [formDataChange, setFormDataChangeChange] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);

    const submitRegister = () => {
        try {
        getUserRegister(formDataChange);
        toast.success("Register Successfully")
        setFormDataChangeChange('')
        } catch (error) {
        // alert(error.message);
        toast.error(`${error.response.data.message}`);
        }
    };
    const handleChangeUserName = (event) => {
        setFormDataChangeChange((params) => ({
        ...params,
        username: event.target.value,
        }));
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
        <div>
        <Grid xs={12} md={6}>
            <Grid container sx={{ justifyContent: "center", marginTop: "60px" }}>
            <Paper
                elevation={5}
                sx={{ height: "autov ", width: "300px", textAlign: "center" }}
                square={false}
            >
                <Grid align="center" sx={{ marginTop: "-16px" }}>
                <Avatar sx={{ backgroundColor: "green" }}></Avatar>
                </Grid>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Register{" "}
                </Typography>
                <Grid sx={{ margin: "10px" }}>
                <TextField
                    fullWidth
                    id="standard-basic"
                    label="User Name"
                    variant="outlined"
                    size="small"
                    sx={{ marginBottom: "20px" }}
                    onChange={handleChangeUserName}
                />
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
                    required
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
                    onClick={submitRegister}
                    disabled={
                    isValidEmail !== true ||
                    isValidPassword !== true ||
                    formDataChange.email === ""
                    }
                >
                    Register
                </Button>
                <p sx={{ color: "red" }}>
                    {" Login"}

                    <Link to={"/login"}>Login</Link>
                </p>
                </Grid>
            </Paper>
            </Grid>
        </Grid>
        </div>
    );
    };

    export default Register;
