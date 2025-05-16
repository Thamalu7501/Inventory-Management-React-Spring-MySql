import React from 'react'
import { Avatar, Box, Container, FormControlLabel, Paper, TextField, Typography, Checkbox, Button, Grid, Link } from '@mui/material';
import LockOutlinedIcon from "@mui/icons-material/LockOutline";
import { Link as RouterLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const Login = () => {
    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Passwordd is required'),

    });

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Container maxWidth="xs">
            <Paper elevation={10} sx={{ marginTop: 15, padding: 2 }}>
                <Avatar sx={{
                    mx: "auto",
                    bgcolor: "secondary.main",
                    textAlign: "center",
                    mb: "1",
                }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
                    Sign In
                </Typography>

                <Box
                    component='form'
                    sx={{ mt: 1 }}>
                    <TextField
                        id='username'
                        label="Username"
                        fullWidth
                        autoFocus
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                        sx={{ mb: 2 }} />

                    <TextField
                        id='password'
                        label="Password"
                        fullWidth
                        type='password'
                        value={formik.values.pasword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password} />


                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me" />
                    <Button type='submit' variant='contained' fullWidth sx={{ mt: 1 }}>Sign In</Button>
                </Box>

                <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
                    <Grid item>
                        <Link component={RouterLink} to="/forgotpass" >Forgot Password ?</Link>
                    </Grid>
                    <Grid item>
                        <Link component={RouterLink} to="/signup" >Sign up</Link>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default Login;
