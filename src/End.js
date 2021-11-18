import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from "./components/Copyright";

const theme = createTheme();

function End(props) {
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
                            Password Updated!
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Your password has been changed successfully.
                            Use your new password to log in.
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

