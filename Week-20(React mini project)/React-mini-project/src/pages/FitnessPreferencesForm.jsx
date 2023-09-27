import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
  FormGroup,
  Grid,
  Box,
  Stack,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import PersonalInfoImage from "../assets/images/1.png";
import WorkoutImage from "../assets/images/3.jpg";
const FitnessPreferencesForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    fitnessLevel: "",
    targetMuscleGroups: [],
    desiredDuration: "",
    specificExercises: [],
  });
  const [workoutPlan, setWorkoutPlan] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      const updatedArray = checked
        ? [...formData[name], value]
        : formData[name].filter((item) => item !== value);
      setFormData({ ...formData, [name]: updatedArray });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const generatedWorkoutPlan = await generateWorkoutPlan(formData);
      setWorkoutPlan(generatedWorkoutPlan);
      scrollToTop();
    } catch (error) {
      console.error("Error generating workout plan:", error);
      setWorkoutPlan("An error occurred while generating the workout plan.");
    } finally {
      setLoading(false);
    }
  };
  const generateWorkoutPlan = async (formData) => {
    const apiKey = "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";
    const endpoint = "https://api.openai.com/v1/engines/davinci/completions";

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    };

    const prompt = `Generate a workout plan for a ${formData.age}-year-old ${
      formData.gender
    } with a fitness level of ${
      formData.fitnessLevel
    }. Target muscle groups: ${formData.targetMuscleGroups.join(
      ", "
    )}. Desired duration: ${formData.desiredDuration} minutes.`;
    console.log(prompt);
    const requestBody = {
      prompt,
      max_tokens: 200,
      temperature: 0.5,
      top_p: 0.9,
      n: 1,
    };

    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error("Failed to generate workout plan");
    }
    const data = await response.json();
    return data.choices[0].text;
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 3300,
      behavior: "smooth", // Enable smooth scrolling
    });
  };
  return (
    <Paper elevation={3} style={{ padding: 100 }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <form onSubmit={handleSubmit}>
        <Stack direction={"row"} gap={20} justifyContent={"space-between"}>
          <Box>
            <img src={PersonalInfoImage} width={"auto"} height={"500px"} />
          </Box>
          <Box sx={{ backgroundColor: "white", width: "100%" }}>
            <Typography variant="h3">Tell Us About You</Typography>

            <Grid container columnSpacing={10} my={8}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Age"
                  name="age"
                  type="number"
                  value={formData.age}
                  sx={{
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                      {
                        borderWidth: "3px",
                        borderColor: "#1C1A67",
                      },
                  }}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel sx={{ fontSize: "18px" }}>Gender</InputLabel>
                  <Select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    sx={{
                      "& fieldset": {
                        borderWidth: "3px", // Set the border width as needed
                        borderColor: "#1C1A67",
                      },
                      "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                        borderColor: "#1C1A67", // Set the border color for the focused state
                        borderWidth: "3px", // Set the border width for the focused state
                      },
                    }}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <FormControl fullWidth>
              <InputLabel sx={{ fontSize: "18px" }}>Fitness Level</InputLabel>
              <Select
                name="fitnessLevel"
                value={formData.fitnessLevel}
                onChange={handleChange}
                sx={{
                  "& fieldset": {
                    borderWidth: "3px", // Set the border width as needed
                    borderColor: "#1C1A67",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "#1C1A67", // Set the border color for the focused state
                    borderWidth: "3px", // Set the border width for the focused state
                  },
                }}
              >
                <MenuItem value="beginner">Beginner</MenuItem>
                <MenuItem value="intermediate">Intermediate</MenuItem>
                <MenuItem value="advanced">Advanced</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
        <Typography variant="h3" my={16}>
          Workput preferences
        </Typography>

        <Stack
          direction={"row-reverse"}
          gap={20}
          justifyContent={"space-between"}
        >
          <Box>
            <img src={WorkoutImage} width={"auto"} height={"600px"} />
          </Box>
          <Box sx={{ width: "100%", flexWrap: "wrap" }}>
            <FormGroup>
              <Typography sx={{ fontSize: "24px" }}>
                Target Muscle Groups
              </Typography>
              <Stack direction={"row"} sx={{ flexWrap: "wrap" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="targetMuscleGroups"
                      value="chest"
                      onChange={handleChange}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: "46px", // Adjust the font size to increase checkbox size
                        },
                      }}
                    />
                  }
                  label="Chest"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="targetMuscleGroups"
                      value="back"
                      onChange={handleChange}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: "46px", // Adjust the font size to increase checkbox size
                        },
                      }}
                    />
                  }
                  label="Back"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="targetMuscleGroups"
                      value="legs"
                      onChange={handleChange}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: "46px", // Adjust the font size to increase checkbox size
                        },
                      }}
                    />
                  }
                  label="Legs"
                />
              </Stack>
            </FormGroup>
            <TextField
              fullWidth
              label="Desired Workout Duration (minutes)"
              name="desiredDuration"
              type="number"
              value={formData.desiredDuration}
              onChange={handleChange}
              sx={{
                my: 4,
                maxWidth: "50%",
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderWidth: "3px",
                  borderColor: "#1C1A67", // Set the border width as needed
                },
              }}
            />
            <FormGroup>
              <Typography variant="subtitle1">Specific Exercises</Typography>
              <Stack direction="row" sx={{ flexWrap: "wrap" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="specificExercises"
                      value="push-ups"
                      onChange={handleChange}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: "46px", // Adjust the font size to increase checkbox size
                        },
                      }}
                    />
                  }
                  label="Push-ups"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="specificExercises"
                      value="sit-ups"
                      onChange={handleChange}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: "46px", // Adjust the font size to increase checkbox size
                        },
                      }}
                    />
                  }
                  label="Sit-ups"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="specificExercises"
                      value="Bicep Curls"
                      onChange={handleChange}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: "46px", // Adjust the font size to increase checkbox size
                        },
                      }}
                    />
                  }
                  label="Bicep Curls"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="specificExercises"
                      value="Bench Press"
                      onChange={handleChange}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: "46px", // Adjust the font size to increase checkbox size
                        },
                      }}
                    />
                  }
                  label="Bench Press"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="specificExercises"
                      value="Tricep Dips"
                      onChange={handleChange}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: "46px", // Adjust the font size to increase checkbox size
                        },
                      }}
                    />
                  }
                  label="Tricep Dips"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="specificExercises"
                      value="Planks"
                      onChange={handleChange}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: "46px", // Adjust the font size to increase checkbox size
                        },
                      }}
                    />
                  }
                  label="Planks"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="specificExercises"
                      value="Deadlifts"
                      onChange={handleChange}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: "46px", // Adjust the font size to increase checkbox size
                        },
                      }}
                    />
                  }
                  label="Deadlifts"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="specificExercises"
                      value="Squats"
                      onChange={handleChange}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: "46px", // Adjust the font size to increase checkbox size
                        },
                      }}
                    />
                  }
                  label="Squats"
                />
              </Stack>
              {/* Add more specific exercises as needed */}
            </FormGroup>

            <Box mt={2}>
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
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Stack>
      </form>
      <Container>
        {workoutPlan !== "" && (
          <>
            <Typography variant="h5" mb={8}>
              Here's your daily personalized workout plan
            </Typography>
            <Typography variant="h4">{workoutPlan}</Typography>
          </>
        )}
      </Container>
    </Paper>
  );
};

export default FitnessPreferencesForm;
