import React from 'react';
import { Card, Divider, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import CheckboxField from '../components/CheckboxField';
import AssessmentContent from '../components/AssessmentContent';

const Step1 = () => {
    return (
        <AssessmentContent title="This is about the 3 most important things in Agile:" >
            <Typography variant="body1" gutterBottom>
                Delivering the products that your customers desire most, as frequently as possible.
            </Typography>
            <Typography variant="body1" gutterBottom>
                The first set of questions is really simple. Still, if you answer all of them with a “yes”, you are already doing a lot of things right.
            </Typography>

            <Grid2 container spacing={2}>
                <Grid2 xs={3}>
                </Grid2>
                <Grid2 xs={6}>
                    <Card>
                        <Typography variant="h6" gutterBottom>
                            The Basics
                        </Typography>
                        <Divider />
                        <Stack>
                            <CheckboxField name="D1" label="Delivering working, tested software every 3 weeks or less" />
                            <CheckboxField name="B1" label="Delivering the highest business value features first" />
                            <CheckboxField name="P1" label="Continuously improving our processes" />
                        </Stack>
                    </Card>
                </Grid2>
                <Grid2 xs={3}>
                </Grid2>
            </Grid2>
        </AssessmentContent >
    );
};

export default Step1;
