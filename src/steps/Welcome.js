import React from 'react';
import { Card, Container } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Welcome = ({ onNext }) => {

    return (
        <Container sx={{ textAlign: 'center', mt: 2 }}>
            <Box>
                <Card sx={{ minWidth: 275, p: 2 }}>
                    <Typography variant="h5" gutterBottom>
                        In this assessment, we will ask you a series of questions to determine how well you are doing with Agile.
                    </Typography>

                </Card>
            </Box>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" color="primary" type="button" onClick={onNext}>
                    START
                </Button>
            </Box>
        </Container>
    );
};
export default Welcome;

