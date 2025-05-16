import React from 'react'
import { Avatar, Box, Container, Paper, TextField, Typography, Button,} from '@mui/material';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';

const Forgotpass = () => {
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
                    placeholder="Enter your email to reset password"
                    fullWidth
                    type='email' />
                <Button type='submit' variant='contained' fullWidth sx={{ mt: 2 }}>Reset</Button>
                </Box>
            </Paper>
        </Container>
    )
}

export default Forgotpass;
