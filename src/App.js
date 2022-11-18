import "./App.css";
import GaramMasala from "./Components/Masala";
import LandingPage from "./Components/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Progress_bar from "./Components/Progressbar";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid>
      <Router>
        <Routes>
          <Route exact path="/garammasala" element={<GaramMasala />} />
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </Grid>
  );
}

export default App;
