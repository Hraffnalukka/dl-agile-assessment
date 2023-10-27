import React from 'react';
import AssessmentContent from '../components/AssessmentContent';
import CheckboxField from '../components/CheckboxField';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import AssessmentCard from '../components/AssessmentCard';
import Checklist from '../components/Checklist';

const Step2 = () => {

    return (
        <React.Fragment>
            <AssessmentContent
                title="Delivering working, tested software every 3 weeks or less">
                <Grid2 container spacing={2}>
                    <Grid2 xs={3}>
                    </Grid2>
                    <Grid2 xs={6}>
                        <AssessmentCard title="Iterations">
                            <Checklist indent={true}>
                                <CheckboxField name="D1_1" label="Timeboxed Iterations" />
                                <CheckboxField name="D1_1_1" label="Always end on time" indent={true} />
                                <CheckboxField name="D1_1_2" label="Team not disrupted or controlled by outsiders" indent={true} />
                                <CheckboxField name="D1_1_3" label="Team usually delivers what they committed to" indent={true} />
                                <CheckboxField name="D1_1_4" label="Iteration length 4 weeks or less" indent={true} />
                            </Checklist>
                        </AssessmentCard>
                    </Grid2>
                    <Grid2 xs={3}>
                    </Grid2>
                </Grid2>
            </AssessmentContent>

        </React.Fragment >
    );
};

export default Step2;