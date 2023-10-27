import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import AssessmentCard from "../components/AssessmentCard";
import { Stack } from "@mui/material";
import CheckboxField from "../components/CheckboxField";
import Checklist from "../components/Checklist";
import AssessmentContent from "../components/AssessmentContent";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Step5 = (onSubmit) => {
    return (
        <React.Fragment>
            <AssessmentContent title="Bonus Questions: things that can be helpful, but are not part of the basics necessities." >
                <Grid2 container spacing={2}>
                    <Grid2 xs={6}>
                        <Stack spacing={2}>
                            <AssessmentCard title="Recommended">
                                <Checklist>
                                    <CheckboxField name="H2_1" label="Team has all skills needed to bring backlog items to Done" />
                                    <CheckboxField name="H2_2" label="Team members not locked into specific roles" />
                                    <CheckboxField name="H2_3" label="Iterations that are doomed to fail are terminated early" />
                                    <CheckboxField name="H2_4" label="PO has product vision that is in sync with PBL" />
                                    <CheckboxField name="H2_5" label="PBL and product vision is highly visible" />
                                </Checklist>
                                <Checklist>
                                    <CheckboxField name="H3_1" label="Everyone on the team participates in estimating" />
                                    <CheckboxField name="H3_2" label="PO available when team is estimating" />
                                    <CheckboxField name="H3_3" label="Estimate relative size (story points) rather than time" />
                                </Checklist>
                                <Checklist>
                                    <CheckboxField name="H4_1" label="Whole team knows top 1-3 impediments" />
                                    <CheckboxField name="H4_2" label="SM has strategy for how to fix top impediment" indent={true} />
                                    <CheckboxField name="H4_3" label="SM focusing on removing impediments" indent={true} />
                                    <CheckboxField name="H4_4" label="Escalated to management when team can’t solve" indent={true} />
                                </Checklist>
                            </AssessmentCard>

                            <AssessmentCard title="Postive Indicators">
                                <Checklist>
                                    <CheckboxField name="H_1_1" label="Team is co-located" />
                                    <CheckboxField name="H_1_2" label="Team has a dedicated Scrum Master" />
                                    <CheckboxField name="H_1_3" label="Team has a dedicated Product Owner" />
                                    <CheckboxField name="H_1_4" label="Team has a Definition of Ready" />
                                    <CheckboxField name="H_1_5" label="Team has a Definition of Done" />
                                </Checklist>
                            </AssessmentCard>

                        </Stack>
                    </Grid2>
                    <Grid2 xs={6}>
                        <Stack spacing={2}>
                            <AssessmentCard title="Recommended">
                                <Checklist>
                                    <CheckboxField name="H5_1" label="Team has a Scrum Master (SM)" />
                                    <CheckboxField name="H5_2" label="SM sits with the team" indent={true} />
                                </Checklist>
                                <Checklist>
                                    <CheckboxField name="H6_1" label="PBL items are broken into tasks within a sprint" />
                                    <CheckboxField name="H6_2" label="Sprint tasks are estimated" indent={true} />
                                    <CheckboxField name="H6_3" label="Estimates for ongoing tasks are updated daily" indent={true} />
                                </Checklist>
                                <Checklist>
                                    <CheckboxField name="H7_1" label="Velocity is measured" />
                                    <CheckboxField name="H7_2" label="All items in sprint plan have an estimate" indent={true} />
                                    <CheckboxField name="H7_3" label="PO uses velocity for release planning" indent={true} />
                                    <CheckboxField name="H7_4" label="Velocity only includes items that are Done" indent={true} />
                                </Checklist>
                                <Checklist>
                                    <CheckboxField name="H8_1" label="Team has a sprint burndown chart" />
                                    <CheckboxField name="H8_2" label="Highly visible" indent={true} />
                                    <CheckboxField name="H8_3" label="Updated daily" indent={true} />
                                </Checklist>
                                <Checklist>
                                    <CheckboxField name="H9_1" label="Daily Scrum is every day, same time & place" />
                                    <CheckboxField name="H9_2" label="PO participates at least a few times per week" indent={true} />
                                    <CheckboxField name="H9_3" label="Max 15 minutes" indent={true} />
                                    <CheckboxField name="H9_4" label="Each team member knows what the others are doing" indent={true} />
                                </Checklist>
                            </AssessmentCard>
                            <AssessmentCard title="Scaling">
                                <Checklist>
                                    <CheckboxField name="H1_2_1" label="You have a Chief Product Owner (if many POs)" />
                                    <CheckboxField name="H1_2_2" label="Dependend teams do Scrum of Scrums" indent={true} />
                                    <CheckboxField name="H1_2_3" label="Dependend teams integrate within each sprint" indent={true} />
                                </Checklist>
                            </AssessmentCard>
                        </Stack>
                    </Grid2>
                </Grid2>
            </AssessmentContent>
            <Box name='Submit' sx={{ mt: 3 }}>
                <Button variant="contained" color="primary" type="button" onClick={onSubmit}>
                    Submit
                </Button>
            </Box>

        </React.Fragment >
    );
}
export default Step5;