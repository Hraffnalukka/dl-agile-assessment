import { Stack } from "@mui/material";
import React from "react";

///make a component called Checklist that takes in a property called indentation and allows children
const Checklist = ({ indent, children }) => {
    return (
        <Stack
            sx={{
                mt: 2,
                borderRadius: 2,
                border: 1,
                borderColor: 'grey.500',
                bgcolor: 'background.paper',
                p: 2
            }}
        >
            {children}
        </Stack>
    );
}
export default Checklist;