import React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";

const AssessmentContent = ({ title, children }) => {
    return (
        <Container>
            <Typography variant="h5" sx={{ mb: 2 }}>
                {title}
            </Typography>
            <Box>
                <Grid>
                    {children}
                </Grid>
            </Box>
        </Container>
    );
};

export default AssessmentContent;

