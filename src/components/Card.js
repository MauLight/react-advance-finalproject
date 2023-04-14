import { Heading, HStack, Image, Text, VStack, Stack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Feature({ title, desc, imageSrc, ...rest }) {

  const imgFilter = {
    borderTopRadius: "lg",
    transition: "all 0.3s ease",
    ':hover': {
      webKitFilter: 'grayscale(100%)',
      filter: "grayscale(100%) !important"
    }
  }

  return (
    <Box borderRadius="lg" shadow='md' bg='white' {...rest}>
      <Image src={imageSrc} sx={imgFilter} />
      <Box m={5}>
        <Heading color="black" fontSize='xl'>{title}</Heading>
        <Text color="black" mt={4}>{desc}</Text>
        <Text color="black" mt={4}>See more <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} size="1x" /></Text>
      </Box>
    </Box>
  )
}

const Card = ({ title, description, imageSrc }) => {
  return (
    <Stack spacing={8} direction='row'>
      <Feature
        title={title}
        desc={description}
        imageSrc={imageSrc}
      />
    </Stack>
  )
};

export default Card;
