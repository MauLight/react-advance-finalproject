import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";
import useScroll from "../hooks/useScroll";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {

  const [hide, setHide] = useState(false);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scroll = useScroll();
  let isHidden = false;

  useEffect(() => {


    if (scroll.y > 150 && scroll.lastY > 0)
      isHidden = true;
    else if (scroll.y < 150 && scroll.lastY < 0)
      isHidden = false;
    isHidden === false ? setHide(0) : setHide(-200);
    console.log(scroll.y);
  }, [scroll.y, scroll.lastY]);

  return (
    <Box

      position="fixed"
      top={0}
      left={0}
      right={0}
      transform="auto"
      translateY={hide}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="rgba(0, 0, 0, 0.8)"
      backdropFilter="saturate(180%) blur(5px)"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="space-between"
          translateY="200px"
          transitionProperty="transform"
          transitionDuration=".3s"
          transitionTimingFunction="ease-in-out"

        >
          <nav>
            {socials && socials.map((elem, index) => {
              return (
                <Link key={elem.url} mx={3} href={elem.url}><FontAwesomeIcon icon={elem.icon} size="2x" /></Link>
              )
            })}
          </nav>
          <nav>
            <HStack spacing={8}>
              <Link onClick={handleClick("contactme")} href="/#contact-me">Contact me</Link>
              <Link onClick={handleClick("projects")} href="/#projects" >Projects</Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
