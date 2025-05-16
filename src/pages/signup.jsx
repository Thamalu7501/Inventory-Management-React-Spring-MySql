import React from 'react'
import { Avatar, Box, Container, Paper, TextField, Typography, Button, Grid, Link } from '@mui/material';
import LockOutlinedIcon from "@mui/icons-material/LockOutline";
import { Link as RouterLink } from 'react-router-dom';
import { loginValidation } from '../validations/loginFormValidation'
import { Formik } from 'formik'
import useStyles from '../styles/loginStyle';

const initialValues = {
    username: '',
    password: '',
    email: ''
};

const Signup = () => {
    const classes = useStyles();
    const handleSubmit = () => console.log('login')
    return (
        <div>
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
                        Sign Up
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
                                    id='email'
                                    label="Email Address"
                                    fullWidth
                                    autoFocus
                                    type='email'
                                    sx={{ mb: 2 }} />
                                <TextField
                                    id='username'
                                    label="Username"
                                    fullWidth
                                    autoFocus
                                    sx={{ mb: 2 }} />
                                {errors.username && touched.username && (
                                    <small className={classes.errorMessage}>{errors.username}</small>
                                )}
                                <TextField
                                    id='password'
                                    label="Password"
                                    fullWidth
                                    type='password' />

                                {errors.password && touched.password && (
                                    <small className={classes.errorMessage}>{errors.password}</small>
                                )}
                               
                                <Button type='submit' variant='contained' fullWidth sx={{ mt: 2 }}>Sign Up</Button>
                            </Box>)}
                    </Formik>
                    <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
                        <Grid item>
                            <Link component={RouterLink} to="/" >Already have an account ?</Link>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}

export default Signup;
