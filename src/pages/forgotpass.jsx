import React from 'react'
import { Avatar, Box, Container, Paper, TextField, Typography, Button, } from '@mui/material';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Forgotpass = () => {
    const validationSchema = Yup.object({
        email: Yup.string().required('Valid email is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Container maxWidth="xs">
            <Paper elevation={10} sx={{ marginTop: 20, padding: 2 }}>
                <Avatar sx={{
                    mx: "auto",
                    bgcolor: "secondary.main",
                    textAlign: "center",
                    mb: "1",
                }}>
                    <LockResetOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" sx={{ textAlign: "center", mb: 1 }}>
                    Reset Password
                </Typography>
                <Box>
                    <TextField
                        id='email'
                        label="Enter your email to reset password"
                        fullWidth
                        type='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email} />
                    <Button type='submit' variant='contained' fullWidth sx={{ mt: 2 }}>Reset</Button>
                </Box>
            </Paper>
        </Container>
    )
}

export default Forgotpass;
