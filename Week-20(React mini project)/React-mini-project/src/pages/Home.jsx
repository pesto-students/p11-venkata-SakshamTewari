import { Typography, Box, Grid, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import FitnessPreferencesForm from "./FitnessPreferencesForm";
import FitnessInfoImage from "../assets/images/2.jpg";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth", // Enable smooth scrolling
    });
  };

  return (
    <React.Fragment>
      <Grid container justifyContent={"space-between"} px={8} mt={8}>
        <Grid item xs={12} md={7}>
          <Typography variant="h2" fontWeight={"700"} color={"#1C1A67"}>
            Unlock Your Best Self: Personalized Diet and Workout Plans at Your
            Fingertips!
          </Typography>
          <Box mt={8}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                px: 16,
                py: 1,
                fontSize: "24px",
                fontWeight: "700",
                backgroundColor: "#00F2BA",
                color: "black",
                letterSpacing: "4px",
              }}
              onClick={scrollToTop}
            >
              Get Started Now
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <img
            src={FitnessInfoImage}
            width={"auto"}
            height={"500px"}
            alt="Fitness Info"
          />
        </Grid>
      </Grid>
      <FitnessPreferencesForm />
    </React.Fragment>
  );
};

export default Home;
