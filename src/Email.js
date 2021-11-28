import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from "./components/Copyright";
import {useEffect, useState} from "react";
import {confirmEmail} from "./Networking";

const theme = createTheme();

function End(props) {
    const [title, setTitle] = useState('Email verified!');
    const [description, setDescription] = useState('Your email has been confirmed successfully.\nYou can now log in.');
    useEffect(()=>{
        let token = props.match.params.id;
        confirmEmail(token).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error);
            setTitle('Error occurred!')
            setDescription(error.response.data.message);
            console.log(error.response.data.message);
        })
    }, [props.match.params.id])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            {title}
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            {description}
                        </Typography>
                    </Container>
                </Box>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}
export default End;

