import React from "react";
import Copyright from "./components/Copyright";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {changePassword} from "./Networking";
const theme = createTheme()
function Home(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        let token = props.match.params.id;
        let password = data.get('password');
        let confirmPassword = data.get('confirmPassword');
        if(validatePassword(password, confirmPassword))
            changePassword(token, password).then(response => {
                console.log(response.status)
                if(response.status === 200) {
                    alert('Password changed you can now log in');
                } else {
                    alert(response.data.message);
                }
            })
    };

    const validatePassword = (newPassword, confirmPassword) => {
        if(newPassword === '') {
            alert('Password can not be empty')
            return false;
        } else if (confirmPassword === '') {
            alert('Confirm password')
            return false;
        } else if (newPassword !== confirmPassword) {
            alert('Passwords are different')
            return false;
        } else {
            return true;
        }
    }
     return (
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Reset password
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                name="password"
                                type="password"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                id="confirmPassword"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Reset password
                            </Button>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
        );
}

export default Home
