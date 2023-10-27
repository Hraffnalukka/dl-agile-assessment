import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function NavigationButtons({ onPrevClick, onNextClick }) {
    const handlePreviousClick = () => {
        console.log('Previous clicked');
        onPrevClick();
    }
    return (
        <Box name='NavigationButtons' sx={{ mt: 3 }}>
            <Button variant="contained" color="primary" type="button" onClick={handlePreviousClick}>
                PREV
            </Button>
            <Button variant="contained" color="primary" type="button" onClick={onNextClick}>
                NEXT
            </Button>
        </Box>
    );
}

export default NavigationButtons;