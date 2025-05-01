import React from 'react'
import { Avatar, Box, Container, FormControlLabel, Paper, TextField, Typography, Checkbox, Button, Grid, Link } from '@mui/material';
import LockOutlinedIcon from "@mui/icons-material/LockOutline";
import { Link as RouterLink } from 'react-router-dom';
import { loginValidation } from '../validations/loginFormValidation'
import { Formik } from 'formik'
import useStyles from '../styles/loginStyle';

const initialValues = {
    username: '',
    password: ''
};

const Login = () => {
    const classes = useStyles();
    const handleSubmit = () => console.log('login')
    return (
        <Container maxWidth="xs">
            <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
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
                <Formik
                    initialValues={initialValues}
                    validationSchema={loginValidation}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched }) => (
                        <Box
                            component='form'
                            onSubmit={handleSubmit}
                            sx={{ mt: 1 }}>
                            <TextField
                                id='username'
                                placeholder="Enter username"
                                fullWidth
                                required
                                autoFocus
                                sx={{ mb: 2 }} />
                            {errors.username && touched.username && (
                                <small className={classes.errorMessage}>{errors.username}</small>
                            )}
                            <TextField
                                id='password'
                                placeholder="Enter password"
                                fullWidth
                                required
                                type='password' />

                            {errors.password && touched.password && (
                                <small className={classes.errorMessage}>{errors.password}</small>
                            )}
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me" />
                            <Button type='submit' variant='contained' fullWidth sx={{ mt: 1 }}>Sign In</Button>
                        </Box>)}
                </Formik>
                <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
                    <Grid item>
                        <Link component={RouterLink} to="/forgot" >Forgot Password ?</Link>
                    </Grid>
                    <Grid item>
                        <Link component={RouterLink} to="/signup" >Sign up</Link>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default Login
