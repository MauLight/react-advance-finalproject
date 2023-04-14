import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import Sidebar from "./components/Sidebar";

const shadow = {
  WebkitBoxShadow: "9px -3px 8px -8px rgba(0,0,0,0.65)",
  MozBoxShadow: "9px -3px 8px -8px rgba(0,0,0,0.65)",
  boxShadow: "9px - 3px 8px - 8px rgba(0, 0, 0, 0.65)"
}

function App() {
  
  return (
    <ChakraProvider>
      <AlertProvider>
        <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
          <GridItem sx={shadow} as="aside" colSpan={{ base: 6, lg: 1, xl: 1 }} bg="tomato" minHeight={{ lg: "100vh" }} p={{ base: "20px", lg: "30px" }}>
            <Sidebar />
          </GridItem>
          <GridItem as="main" colSpan={{ base: 6, lg: 5, xl: 5 }} >
            <Header />
            <LandingSection />
            <ProjectsSection />
            <ContactMeSection />
            <Footer />
            <Alert />
          </GridItem>
        </Grid>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
