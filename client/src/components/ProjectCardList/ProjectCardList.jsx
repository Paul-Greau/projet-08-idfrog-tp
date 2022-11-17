/* eslint-disable react/prop-types */

import React, { useState } from "react";
// import PropTypes from 'prop-types';

// Copoments
import ProjectCard from "../ProjectCard/ProjectCard";
import PlaceHolder from "../../components/ProjectCard/ProjectCardPlaceholder";

import { categorys, financingTypes } from "./categaryFilter";

// Material UI

import {
  Container,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  LinearProgress,
} from "@mui/material";

// CSS
import { projectCardStyles } from "./styles";

function ProjectCardList({ result, isLoading }) {
  console.log(result);

  const categories = [
    "TOUTES CATEGORIES",
    "ANIMAUX",
    "ART & PHOTO",
    "ARTISANAT & CUISINE",
    "AUTOMOBILE",
    "BD",
    "EDITION & JOURNAL.",
    "ENFANCE & EDUC.",
    "ENVIRONNEMENT",
    "FILM & VIDÉO",
    "JEUX",
    "MODE & DESIGN",
    "MUSIQUE",
    "SANTÉ & BIEN-ÊTRE",
    "SOLIDAIRE & CITOYEN",
    "SPECTACLE VIVANT",
    "SPORTS",
    "TECHNOLOGIE",
    "AUTRES PROJETS",

  ]

  const financingTypes = [
    "Tout type de financement",
    "Investissement par don",
    "Investissement avec prêt",
    "capital"
  ]

  const [categoryFilter, setCategoryFilter] = useState('');
  const [financingTypeFilter, setFinancingTypeFilter] = useState('');

  const filterByCategoryAndType = (res) => 
    (res.category.name.includes(categoryFilter) || categoryFilter === "TOUTES CATEGORIES") 
    && (res.invest_type.includes(financingTypeFilter) || financingTypeFilter === "Tout type de financement")
    
  


  return (
    <>
      <Grid container spacing={2} alignItems="stretch" justifyContent="center" sx={{pb: "20px"}}>
        <Grid item xs={12} md={4} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" >Catégorie</InputLabel>
            <Select
          sx={{
            mt: 2,
            width: { xs: '100%', sm: '100%', md: '48.2%', lg: '48.7%' },
            display: { xs: 'row', md: 'colum' },
          }}
          id="category"
          value={categoryFilter}
          label="Catégories"
          onChange={(event) => setCategoryFilter(event.target.value)}
        >
          {categories.map((category, index) => (
            <MenuItem key={index} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type de financement</InputLabel>
            <Select
          sx={{
            mt: 2,
            width: { xs: '100%', sm: '100%', md: '48.2%', lg: '48.7%' },
            display: { xs: 'row', md: 'colum' },
          }}
          id="invest_type"
          value={financingTypeFilter}
          label="Type de financement"
          onChange={event => setFinancingTypeFilter(event.target.value)}
        >
          {financingTypes.map((financingType, index) => (
            <MenuItem key={index} value={financingType}>
              {financingType}
            </MenuItem>
          ))}
        </Select>
          </FormControl>
        </Grid>  
      </Grid>
      <Box component="section" maxWidth="medium">
        <Container component="section" maxWidth="lg">
          <Grid container spacing={2} alignItems="stretch">
            {/* {result &&
              result.map((res) => (
                <Grid item xs={12} md={4} sm={6} key={res.id}>
                  <ProjectCard
                    id={res.id}
                    projet={res.name}
                    amount={res.amount_target}
                    description={res.description}
                    profile={res.profile.pseudo}
                  />
                </Grid>
              ))} */}
                  {result.filter(filterByCategoryAndType)
              .map(res => <Grid item xs={12} md={4} sm={6} key={res.id}>
                <ProjectCard
                  id={res.id}
                  createdAt={res.created_at}
                  projet={res.name}
                  amount={res.amount_target}
                  description={res.description}
                  profile={res.profile.pseudo}
                  contributions={res.contributions}
                />
              </Grid>
            ))}
          {isLoading && (
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                padding: "16px 0 0 16px",
              }}
            >
              <Box sx={{ width: "100%", marginBottom: "20px" }}>
                <LinearProgress />
              </Box>
              <PlaceHolder />
              <PlaceHolder />
              <PlaceHolder />
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
}

// ProjectCardList.PropType = {};

// ProjectCardList.defaultProps = {};

export default React.memo(ProjectCardList);
