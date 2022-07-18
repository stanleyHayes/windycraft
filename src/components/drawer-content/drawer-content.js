import {Button, Container, Divider, Stack, Typography} from "@mui/material";
import {BusinessCenter, Close, ContactPage,  Home, Info} from "@mui/icons-material";
import {UI_ACTION_CREATORS} from "../../redux/ui/ui-action-creators";
import {useDispatch} from "react-redux";
import SideBarLinkItem from "../shared/side-bar-link-item";
import React from "react";

const DrawerContent = () => {

    const dispatch = useDispatch();

    return (
        <Container
            sx={{
                width: '90vw',
                height: '100vh',
                paddingTop: 2,
                paddingBottom: 2,
                backgroundColor: 'primary.main'
            }}>
            <Button
                onClick={() => dispatch(UI_ACTION_CREATORS.closeSidebar())}
                variant="outlined"
                color="secondary"
                sx={{mb: 4, borderWidth: 2}}
                endIcon={<Close color="secondary"/>}>
                Close
            </Button>

            <Typography
                sx={{
                    fontWeight: 'bolder',
                    color: 'secondary.main'
                }}
                mb={2}
                variant="h4">Super Craft</Typography>
            <Typography
                sx={{
                    color: 'secondary.main',
                    fontWeight: 500
                }}
                mb={4}
                variant="body1">
                The home of blacksmith
            </Typography>

            <Stack direction="column" divider={<Divider/>} spacing={2}>

                <SideBarLinkItem
                    icon={
                        <Home
                            sx={{
                                color: "secondary.main",
                                borderRadius: 1,
                                padding: 0.4,
                                width: 24,
                                height: 24,
                                backgroundColor: '#F9A34F40'
                            }}/>}
                    label="Home"
                    path="/"
                />
                <SideBarLinkItem
                    icon={<Info
                        sx={{
                            color: "secondary.main",
                            borderRadius: 1,
                            padding: 0.4,
                            width: 24,
                            height: 24,
                            backgroundColor: '#F9A34F40'
                        }}
                    />}
                    label="About"
                    path="/about"
                />
                <SideBarLinkItem
                    icon={<BusinessCenter
                        sx={{
                            color: "secondary.main",
                            borderRadius: 1,
                            padding: 0.4,
                            width: 24,
                            height: 24,
                            backgroundColor: '#F9A34F40'
                        }}
                    />}
                    label="Services"
                    path="/services"
                />
                {/*<SideBarLinkItem*/}
                {/*    icon={<Star*/}
                {/*        sx={{*/}
                {/*            color: "secondary.main",*/}
                {/*            borderRadius: 1,*/}
                {/*            padding: 0.4,*/}
                {/*            width: 24,*/}
                {/*            height: 24,*/}
                {/*            backgroundColor: '#F9A34F40'*/}
                {/*        }}*/}
                {/*    />}*/}
                {/*    label="Portfolio"*/}
                {/*    path="/portfolio"*/}
                {/*/>*/}
                {/* <SideBarLinkItem
                    icon={<Favorite
                        sx={{
                            color: "secondary.main",
                            borderRadius: 1,
                            padding: 0.4,
                            width: 24,
                            height: 24,
                            backgroundColor: '#F9A34F40'
                        }}
                    />}
                    label="Testimonial"
                    path="/testimonials"
                /> */}
                <SideBarLinkItem
                    icon={<ContactPage
                        sx={{
                            color: "secondary.main",
                            borderRadius: 1,
                            padding: 0.4,
                            width: 24,
                            height: 24,
                            backgroundColor: '#F9A34F40'
                        }}
                    />}
                    label="Contact"
                    path="/contact"
                />
            </Stack>
        </Container>
    )
}

export default DrawerContent;
