import { AtSignIcon, CalendarIcon, EditIcon, StarIcon, UnlockIcon } from '@chakra-ui/icons'
import { Avatar, AvatarBadge, Button, HStack, Link, List, ListIcon, ListItem, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import useScroll from '../hooks/useScroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
    faMedium,
    faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

export default function Sidebar() {

    const [hide, setHide] = useState(false);

    const toast = useToast();

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

    const handleOut = () => {
        toast({
            title: "Logged out",
            description: "You've succesfully logged out of the system.",
            duration: 5000,
            isClosable: true,
            status: "success",
            variant: 'left-accent',
            position: 'bottom-left',
            icon: <UnlockIcon />
        });
    }

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

    const btnStyle = {
        p: "30px",
        bg: "tomato",
        color: "white",
        mt: "20px",
        borderRadius: "5px",
        transition: "all 0.3s ease",
        ':hover': {
            bg: "gray.100",
            color: "tomato"
        },
        ':active': {
            bg: "tomato",
            color: "white",
        }
    }

    const noUnder = {
        ':hover': {
            color: "#5e2a65",
            textDecoration: "none"
        }
    }

    const scroll = useScroll();
    let isHidden = false;

    useEffect(() => {


        if (scroll.y > 556 && scroll.lastY > 0)
            isHidden = true;
        else if (scroll.y < 556 && scroll.lastY < 0)
            isHidden = false;
        isHidden === false ? setHide(-900) : setHide(-652);
        console.log(scroll.y);
    }, [scroll.y, scroll.lastY]);

    return (
        <List
            color="white"
            fontSize="1.2em"
            spacing={4}
            ml="25px"
            mt={20}
            position="fixed"
            top={0}
            left={0}
            right={0}
            transform="auto"
            translateX={hide}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
        >
            <ListItem my={7} justifyContent="center" display="flex">
                <Avatar src="https://i.pravatar.cc/150?img=7" size="2xl">
                    <AvatarBadge width={2} height={2} p={4} bg="red.500" border="1px solid white">
                        <Text fontSize="xs" color="white">9</Text>
                    </AvatarBadge>
                </Avatar>
            </ListItem>
            <ListItem my={7} justifyContent="center" display="flex">
                <HStack>
                    {socials && socials.map((elem, index) => {
                        return (
                            <Link key={elem.url} href={elem.url}><FontAwesomeIcon icon={elem.icon} size="1x" className='nav-icon2' /></Link>
                        )
                    })}
                </HStack>

            </ListItem>
            <ListItem justifyContent="center" display="flex" >
                <Link className="nav-item2" sx={noUnder} onClick={handleClick("landing")} href="/#landing">
                    <HStack>
                        <ListIcon as={StarIcon} py={1} />
                        <Text>Profile</Text>
                    </HStack>
                </Link>
            </ListItem>
            <ListItem justifyContent="center" display="flex">
                <Link className="nav-item2" sx={noUnder} onClick={handleClick("projects")} href="/#projects">
                    <HStack>
                        <ListIcon as={EditIcon} py={1} />
                        <Text>Featured</Text>
                    </HStack>
                </Link>
            </ListItem>
            <ListItem justifyContent="center" display="flex" >
                <Link className="nav-item2" sx={noUnder} onClick={handleClick("contactme")} href="/#contact-me">
                    <HStack>
                        <ListIcon as={AtSignIcon} py={1} />
                        <Text>Contact Me</Text>
                    </HStack>
                </Link>
            </ListItem>
            <ListItem justifyContent="center" display="flex" >
                <Button sx={btnStyle} onClick={handleOut} >Log Out</Button>
            </ListItem>
        </List>
    )
}
