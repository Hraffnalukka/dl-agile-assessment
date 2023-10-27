import { Card, Typography } from "@mui/material";
import React from "react";

//make a component called Card that takes in a title and children
//and renders a Card with a title and children
const AssessmentCard = ({ title, children }) => {
    return (
        <Card>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            {children}
        </Card>
    );
};
export default AssessmentCard;