import React from 'react';
import AssessmentContent from '../components/AssessmentContent';
import CheckboxField from '../components/CheckboxField';
import { Typography, Card } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Checklist from '../components/Checklist';

const Step3 = () => {

    return (
        <React.Fragment>
            <AssessmentContent
                title="Delivering what the business needs most">
                <Grid2 container spacing={2}>
                    <Grid2 xs={6}>
                        <Card>
                            <Typography variant='h6'>Product Owner</Typography>
                            <Checklist>
                                <CheckboxField name="B1_1" label="Clearly defined product owner" headlinestyle={true} />
                            </Checklist>
                            <Checklist indent={true}>
                                <CheckboxField name="B1_1_1" label="PO is empowered to prioritise" indent={true} />
                                <CheckboxField name="B1_1_2" label="PO has knowledge to prioritise" indent={true} />
                                <CheckboxField name="B1_1_3" label="PO has direct contact with the team" indent={true} />
                                <CheckboxField name="B1_1_4" label="PO has direct contact with the stakeholders" indent={true} />
                                <CheckboxField name="B1_1_5" label="PO speaks with one voice (in case PO is a team)" indent={true} />
                            </Checklist>
                        </Card>

                    </Grid2>
                    <Grid2 xs={6}>
                        <Card>
                            <Typography variant='h6'>Product Backlog</Typography>
                            <Checklist>
                                <CheckboxField name="B2_1" label="PO has a Product Backlog" />
                            </Checklist>
                            <Checklist indent={true}>
                                <CheckboxField name="B2_1_1" label="Have sprint planning meeting" />
                                <CheckboxField name="B2_1_2" label="Team has a sprint backlog" />
                                <CheckboxField name="B2_1_3" label="Demo happens after every sprint" />
                            </Checklist>
                        </Card>
                    </Grid2>
                </Grid2>
            </AssessmentContent>
        </React.Fragment >
    );
};

export default Step3;

