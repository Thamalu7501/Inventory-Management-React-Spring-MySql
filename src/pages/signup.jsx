import React from 'react'
import { Avatar, Box, Container, Paper, TextField, Typography, Button, Grid, Link } from '@mui/material';
import LockOutlinedIcon from "@mui/icons-material/LockOutline";
import { Link as RouterLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
    const validationSchema = Yup.object({
        email: Yup.string().required('Email is required'),
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Passwordd is required'),

    });

    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
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

                    <Box

                        sx={{ mt: 1 }}>
                        <TextField
                            id='email'
                            label="Email"
                            fullWidth
                            autoFocus
                            type='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            sx={{ mb: 2 }} />

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


                        <Button type='submit' variant='contained' fullWidth sx={{ mt: 2 }}>Sign Up</Button>
                    </Box>

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
