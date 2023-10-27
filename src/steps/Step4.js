// Note: This is the fourth step of the assessment process
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import AssessmentContent from '../components/AssessmentContent';
import React from 'react';
import AssessmentCard from '../components/AssessmentCard';
import Checklist from '../components/Checklist';
import CheckboxField from '../components/CheckboxField';


const Step4 = () => {
    return (
        <React.Fragment>
            <AssessmentContent
                title="Continuously improving the process">
                <Grid2 container spacing={2}>
                    <Grid2 xs={6}>
                        <AssessmentCard title="Retrospectives">
                            <Checklist>
                                <CheckboxField name="P1_1" label="Retrospectives happen after every sprint" />
                                <CheckboxField name="P1_1_1" label={"Results in concrete improvement proposals"} indent={true} />
                                <CheckboxField name="P1_1_2" label={"Some proposals actually get implemented"} indent={true} />
                                <CheckboxField name="P1_1_3" label={"Whole team and PO participates"} indent={true} />
                            </Checklist>
                        </AssessmentCard>

                    </Grid2>
                    <Grid2 xs={6}>
                        <AssessmentCard title="Definition of Done">
                            <Checklist>
                                <CheckboxField name="P1_2_1" label="DoD achievable within each iteration" />
                                <CheckboxField name="P1_2_2" label="Team respects DoD" indent={true} />
                            </Checklist>
                        </AssessmentCard>
                        <AssessmentCard title="Daily Stand-Up">
                            <Checklist>
                                <CheckboxField name="P1_3_1" label="Daily Stand-Up happens" />
                                <CheckboxField name="P1_3_2" label="Whole team participates" indent={true} />
                            </Checklist>
                        </AssessmentCard>
                    </Grid2>
                </Grid2>
            </AssessmentContent>
        </React.Fragment >
    );
}
export default Step4;