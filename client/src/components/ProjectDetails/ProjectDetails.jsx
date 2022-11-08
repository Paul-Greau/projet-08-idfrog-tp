/* eslint-disable react/prop-types */
import React, { useState } from "react";
// Components
import Project from "./Project/Project";
import Faq from "./FAQ/Faq"
import Contributes from "./Contributes/Contributes"
import Comments from "./Comments/Comments";
// Material UI
import {Tab, Box} from "@mui/material";
import { TabList, TabContext} from "@mui/lab"
// CSS
import "./projectDetailsStyles.scss"



const ProjectDetails = ({result}) => {
    const [value, setValue] = useState("1")
    const handleChange = (e, newValue) => {
        setValue(newValue)
    }




    return (
        <div>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="PROJET" value="1" />
                        <Tab label="FAQ" value="2" />
                        <Tab label= {`CONTRIBUTIONS : ${result.contributions?.length}`} value="3" />
                        <Tab label= {`COMMENTAIRES : ${result.comments?.length}`} value="4" />
                    </TabList>
                </Box>
                {value === "1" &&(<Box>
                    
                        <Project
                        name={result.name}
                        resume={result.resume}
                        description={result.description}
                        />
                    
                </Box>)}
                
                {value === "2" &&(<Box>
                    
                        <Faq/>
                    
                </Box>)}
                {value === "3" &&(<Box>
                    
                    <Contributes
                    contributes={result.contributions}
                    />
                
            </Box>)}
            {value === "4" &&(<Box>
                    
                    <Comments
                    comments={result.comments}
                    />
                
            </Box>)}

            </TabContext>
        </div>
    );
};

export default ProjectDetails;
