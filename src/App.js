import { ChakraProvider, Grid, GridItem, extendTheme } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import Sidebar from "./components/Sidebar";
import './index.css';

const fonts = {
  body: 'Poppins',
  heading: 'Poppins'
}

const theme = extendTheme({ fonts });

function App() {

  return (
    <ChakraProvider theme={theme}>
      <AlertProvider>
        <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
          <GridItem as="aside" colSpan={{ base: 6, lg: 1, xl: 1 }} bg="tomato" minHeight={{ lg: "100vh" }} p={{ base: "20px", lg: "30px" }}>
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
