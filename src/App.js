import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Course from "./components/Course";

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar sx={{ fontSize: 30 }}>Card Project</Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={process.env.PUBLIC_URL + "/images/angular.jpg"}
              title="Angular"
              description="This is Angular course."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={process.env.PUBLIC_URL + "/images/bootstrap5.png"}
              title="Bootstrap"
              description="This is Bootstrap course."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={process.env.PUBLIC_URL + "/images/ccsharp.png"}
              title="Csharp"
              description="This is Csharp course."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={process.env.PUBLIC_URL + "/images/completeweb.jpg"}
              title="Complete Web"
              description="This is Complete Web course."
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
