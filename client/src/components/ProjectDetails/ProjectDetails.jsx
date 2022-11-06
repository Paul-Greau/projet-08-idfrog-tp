import React, { useState } from "react";
import {Tab, Tabs} from "@mui/material";

const ProjectDetails = () => {
    const [value, setValue] = useState(0)
    const handleChange = (e, newValue) => {
        setValue(newValue)
    }
    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="PROJET"></Tab>
                <Tab label="FAQ"></Tab>
                <Tab label="CONSTRIBUTIONS"></Tab>
                <Tab label="COMMENTAIRES"></Tab>
            </Tabs>
        </div>
    );
};

export default ProjectDetails;
