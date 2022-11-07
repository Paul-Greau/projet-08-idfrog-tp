/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
// Services
import {getProjectById} from '../../services/projects';
// Components
import Project from "./Project/Project";
import Faq from "./FAQ/Faq"
import Contributes from "./Contributes/Contributes"
import Comment from "./Comments/Comments"
// Material UI
import {Tab, Box} from "@mui/material";
import { TabList, TabContext} from "@mui/lab"
// CSS
import "./projectDetailsStyles.scss"
import Comments from "./Comments/Comments";




const ProjectDetails = () => {
    const [value, setValue] = useState("1")
    const [result, setResult] = useState([]);
    const { id } = useParams();
    const handleChange = (e, newValue) => {
        setValue(newValue)
    }


    const flag = useRef(false)

    // Récupération de la liste des utilisateurs à l'affichage
    useEffect(() => {
        if(flag.current === false){
            getProjectById(id)
                .then(res => {
                    // Liste dans le state
                    setResult(res.data)
                    console.log(res.data)
                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true

    }, [])
    
      

    return (
        <div>
            {/* <Tabs value={value} onChange={handleChange}>
                <Tab label="PROJET" >

                </Tab>
                <Tab label="FAQ">

                </Tab>
                <Tab label=  "CONSTRIBUTIONS:">

                </Tab>
                <Tab label= "COMMENTAIRES:">

                </Tab>
            </Tabs> */}
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="PROJET" value="1" />
                        <Tab label="FAQ" value="2" />
                        <Tab label= "CONTRIBUTIONS" value="3" />
                        <Tab label="COMMENTAIRES" value="4" />
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
