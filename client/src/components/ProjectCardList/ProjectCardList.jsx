/* eslint-disable react/prop-types */
import React, {useState} from 'react';
// import PropTypes from 'prop-types';

// Copoments
import ProjectCard from '../ProjectCard/ProjectCard';

// Material UI
import { 
  Container, 
  Grid, 
  Box, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem 
} 
from '@mui/material';

// CSS
// eslint-disable-next-line no-unused-vars
import { projectCardStyles } from '../ProjectCard/styles';

function ProjectCardList({ result }) {
  console.log(result);

  const categories = [
    "FILM & VIDÉO",
    "SANTÉ & BIEN-ÊTRE",
    "SOLIDAIRE & CITOYEN",
    "MUSIQUE",
    "SPECTACLE VIVANT",
    "EDITION & JOURNAL.",
    "JEUX",
    "SPORTS",
    "ART & PHOTO",
    "ARTISANAT & CUISINE",
    "TECHNOLOGIE",
    "MODE & DESIGN",
    "BD",
    "ENFANCE & EDUC.",
    "PATRIMOINE",
    "AUTRES PROJETS",
    "automobile"
  ]

  const financingTypes = [
    "Investissement par don",
    "Investissement par prêt",
    "capital"
  ]

  const [categoryFilter, setCategoryFilter] = useState('');
  const [financingTypeFilter, setFinancingTypeFilter] = useState('');

  return (
    <>
    <Grid container spacing={2} alignItems="stretch" justifyContent="center" sx={{pb: "20px"}}>
      <Grid item xs={12} md={4} sm={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" >Catégorie</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={categoryFilter}
            label="Age"
            onChange={event => setCategoryFilter(event.target.value)}
          >
            {categories.map((category => (
              <MenuItem value={category} key={category.index}>{category}</MenuItem>
            )))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={4} sm={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type de financement</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={financingTypeFilter}
            label="Age"
            onChange={event => setFinancingTypeFilter(event.target.value)}
          >
            {financingTypes.map((financingType => (
              <MenuItem value={financingType} key={financingType.index}>{financingType}</MenuItem>
            )))}
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
                {result.filter(res => res.category.name.includes(categoryFilter) && res.invest_type.includes(financingTypeFilter))
            .map(res => <Grid item xs={12} md={4} sm={6} key={res.id}>
              <ProjectCard
                id={res.id}
                projet={res.name}
                amount={res.amount_target}
                description={res.description}
                profile={res.profile.pseudo}
              />
            </Grid>)}
        </Grid>
      </Container>
    </Box>
    </>
  );
}

ProjectCardList.PropType = {};

ProjectCardList.defaultProps = {};

export default React.memo(ProjectCardList);
