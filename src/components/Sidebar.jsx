import { AtSignIcon, CalendarIcon, EditIcon, UnlockIcon } from '@chakra-ui/icons'
import { Avatar, AvatarBadge, Button, Link, List, ListIcon, ListItem, Text, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import useScroll from '../hooks/useScroll';

export default function Sidebar() {

    const [hide, setHide] = useState(false);

    const toast = useToast();

    const handleClick = () => {
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
            <ListItem justifyContent="center" display="flex" >
                <Link to="/">
                    <ListIcon as={CalendarIcon} />
                    Dashboard
                </Link>
            </ListItem>
            <ListItem justifyContent="center" display="flex">
                <Link to="/create">
                    <ListIcon as={EditIcon} />
                    Create
                </Link>
            </ListItem>
            <ListItem justifyContent="center" display="flex" >
                <Link to="/profile">
                    <ListIcon as={AtSignIcon} />
                    Profile
                </Link>
            </ListItem>
            <ListItem justifyContent="center" display="flex" >
                <Button sx={btnStyle} onClick={handleClick} >Log Out</Button>
            </ListItem>
        </List>
    )
}
