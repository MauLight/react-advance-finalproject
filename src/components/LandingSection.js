import React from "react";
import { Avatar, Heading, VStack, Image, Text, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar src='https://i.pravatar.cc/150?img=7' size="2xl" />
    <Box>
      <Text fontSize='lg' my="30px">{greeting}</Text>
    </Box>
    <Text fontSize='5xl' className="bio">{bio1}</Text>
    <Text fontSize='5xl' className="bio">{bio2}</Text>
  </FullScreenSection>
);

export default LandingSection;
