import {Button, Container, Divider, Stack} from "@mui/material";
import {BusinessCenter, Close, ContactPage, Favorite, Home, Info, Star} from "@mui/icons-material";
import {UI_ACTION_CREATORS} from "../../redux/ui/ui-action-creators";
import {useDispatch} from "react-redux";
import SideBarLinkItem from "../shared/side-bar-link-item";

const DrawerContent = () => {

    const dispatch = useDispatch();

    return (
        <Container
            sx={{
                width: '90vw',
                height: '100vh',
                paddingTop: 8,
                paddingBottom: 8,
                backgroundColor: 'primary.main'
            }}>
            <Button
                onClick={() => dispatch(UI_ACTION_CREATORS.closeSidebar())}
                variant="outlined"
                color="secondary"
                endIcon={<Close color="secondary"/>}>
                Close
            </Button>

            <Stack mt={8} direction="column" divider={<Divider/>} spacing={2}>
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
                <SideBarLinkItem
                    icon={<Star
                        sx={{
                            color: "secondary.main",
                            borderRadius: 1,
                            padding: 0.4,
                            width: 24,
                            height: 24,
                            backgroundColor: '#F9A34F40'
                        }}
                    />}
                    label="Portfolio"
                    path="/portfolio"
                />
                <SideBarLinkItem
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
                />
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
