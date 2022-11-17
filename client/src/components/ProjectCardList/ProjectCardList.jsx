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

  const [categoryFilter, setCategoryFilter] = useState("");
  const [financingTypeFilter, setFinancingTypeFilter] = useState("");

  const filterByCategoryAndType = (res) =>
    (res.category.name.includes(categoryFilter) ||
      categoryFilter === "TOUTES CATEGORIES") &&
    (res.invest_type.includes(financingTypeFilter) ||
      financingTypeFilter === "Tout type de financement");

  return (
    <>
      <Container component="section" sx={{ mt: 5 }} maxWidth="lg">
        <Box component="section">
          <Grid
            container
            spacing={0}
            alignItems="stretch"
            justifyContent="center"
            sx={projectCardStyles.selectBox}
          >
            <Grid item xs={12} md={4} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Catégorie</InputLabel>
                <Select
                  sx={projectCardStyles.selectInput}
                  id="category"
                  value={categoryFilter}
                  label="Catégories"
                  onChange={(event) => setCategoryFilter(event.target.value)}
                >
                  {categorys.map((category, index) => (
                    <MenuItem key={index} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Type de financement
                </InputLabel>
                <Select
                  sx={projectCardStyles.selectInput}
                  id="invest_type"
                  value={financingTypeFilter}
                  label="Type de financement"
                  onChange={(event) =>
                    setFinancingTypeFilter(event.target.value)
                  }
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
        </Box>
        <Grid container spacing={2} alignItems="stretch">
          {!isLoading &&
            result.filter(filterByCategoryAndType).map((res) => (
              <Grid item xs={12} md={4} sm={6} key={res.id}>
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
