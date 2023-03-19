import './App.css';
import theme from "./utils/theme";
import Hero from "./components/HeroComp/Hero";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import {ThemeProvider} from "@mui/material";

function App() {
  return (
      <ThemeProvider theme={theme}>
          <Navbar />
          <Hero />
          <Footer />
      </ThemeProvider>
  );
}

export default App;

