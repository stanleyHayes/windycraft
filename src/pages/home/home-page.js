import React, {useState} from "react";
import Layout from "../../components/layout/layout";
import {makeStyles} from "@mui/styles";
import {
    Box,
    Button, Card, CardContent,
    Container,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText, Stack, TextField,
    Typography
} from "@mui/material";
import {ChevronRight, Lightbulb} from "@mui/icons-material";
import CoreValue from "../../components/shared/core-value";
import Service from "../../components/shared/service";
import {useDispatch, useSelector} from "react-redux";
import {selectServices} from "../../redux/services/service-reducer";
import {Link} from "react-router-dom";
import {UI_ACTION_CREATORS} from "../../redux/ui/ui-action-creators";
import Carousel from 'react-multi-carousel';
import {UTILS} from "../../utils/utils";
import {selectClients} from "../../redux/clients/client-reducer";
import Client from "../../components/shared/client";
import Testimonial from "../../components/shared/testimonial";
import {selectTestimonials} from "../../redux/testimonials/testimonial-reducer";
import Stat from "../../components/shared/stat";


const HomePage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {},
            bannerImage: {
                width: '100%',
                height: '100%',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                right: 0
            },
            bannerRoot: {
                position: 'relative',
                height: '70vh',
                [theme.breakpoints.down('md')]: {
                    height: '80vh'
                },
                [theme.breakpoints.down('sm')]: {
                    height: '90vh'
                },
                width: '100%',
            },
            bannerContent: {
                width: '100%',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                zIndex: 10,
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                height: '100%'
            },
            icon: {
                width: 50,
                height: 50,
                borderRadius: theme.shape.borderRadius
            },
            whyChooseUsImage: {
                width: '100%',
                height: '100%',
                objectPosition: 'center',
                objectFit: 'cover'
            },
            link: {
                textDecoration: 'none'
            },
            clientContainer: {
                marginLeft: 4,
                marginRight: 4
            }
        }
    });
    // Statistics
    // Submit a review
    // Watch our video
    // Slider of products

    const classes = useStyles();

    const mission = {
        icon: <Lightbulb/>,
        name: 'Mission',
        description: 'Complex jobs. Difficult installations. Artistic beauty. Creativity is found across our wide breadth of work. Complex jobs. Difficult installations. Artistic beauty. Creativity is found across our wide breadth of work.'
    };
    const vision = {
        icon: <Lightbulb/>,
        name: 'Vision',
        description: 'Complex jobs. Difficult installations. Artistic beauty. Creativity is found across our wide breadth of work. Complex jobs. Difficult installations. Artistic beauty. Creativity is found across our wide breadth of work.'
    };

    const {services} = useSelector(selectServices);
    const {clients} = useSelector(selectClients);
    const {testimonials} = useSelector(selectTestimonials);


    const dispatch = useDispatch();

    const [contact, setContact] = useState({});
    const [error, setError] = useState({});
    const {firstName, lastName, email, phone, subject, message} = contact;

    const handleContactChange = event => {
        setContact({...contact, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (!firstName) {
            setError({error, firstName: 'First name required'});
            return;
        } else {
            setError({error, firstName: null});
        }

        console.log(contact);
    }

    return (
        <Layout>
            <Box className={classes.bannerRoot}>
                <Box className={classes.bannerContent}>
                    <Container
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '100%',
                            justifyContent: 'center'
                        }}>
                        <Grid
                            justifyContent="center"
                            alignItems="center"
                            container={true}>
                            <Grid item={true} xs={12} md={8} lg={6}>
                                <Typography
                                    sx={{
                                        color: 'white',
                                        fontWeight: 'bolder'
                                    }}
                                    align="center"
                                    mb={2}
                                    variant="h2">Windy Craft</Typography>
                                <Typography
                                    sx={{
                                        color: 'white'
                                    }}
                                    align="center"
                                    mb={2}
                                    variant="h5">
                                    Slider summary of services
                                </Typography>
                                <Typography
                                    align="center"
                                    sx={{
                                        color: 'white',
                                        fontWeight: 500
                                    }}
                                    mb={8}
                                    paragraph={true}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore dolore magna aliquyam erat, sed diam
                                    voluptua.
                                </Typography>
                            </Grid>
                            <Grid
                                container={true}
                                spacing={2}
                                justifyContent="center"
                                alignItems="center">
                                <Grid item={true} xs={12} sm={6} md={3}>
                                    <Button
                                        sx={{
                                            color: 'secondary.main'
                                        }}
                                        variant="contained"
                                        size="large"
                                        fullWidth={true}>
                                        Get a quote
                                    </Button>
                                </Grid>
                                <Grid item={true} xs={12} sm={6} md={3}>
                                    <Button
                                        sx={{borderWidth: 2}}
                                        color="secondary"
                                        variant="outlined"
                                        size="large"
                                        fullWidth={true}>
                                        Services
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <img className={classes.bannerImage} alt="" src="/assets/about-background-image.jpg"/>
            </Box>

            <Box pt={4} pb={4}>
                <Container>
                    <Typography mb={2} fontWeight='bold' variant="body2" align="center">
                        Our Clients
                    </Typography>
                    <Typography mb={2} variant="h5" align="center">
                        What Can We Do?
                    </Typography>
                    <Carousel
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        responsive={UTILS.responsive}>
                        {clients.map((client, index) => {
                            return (
                                <div className={classes.clientContainer} key={index}>
                                    <Client client={client}/>
                                </div>
                            )
                        })}
                    </Carousel>
                </Container>
            </Box>

            <Box pt={8} pb={8} sx={{backgroundColor: 'background.dark'}}>
                <Container>
                    <Typography mb={2} variant="h4" align="center">Mission & Vision</Typography>
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} md={6}>
                            <CoreValue value={mission}/>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <CoreValue value={vision}/>
                        </Grid>

                    </Grid>
                </Container>
            </Box>

            <Box pt={4} pb={4} sx={{backgroundColor: 'background.light'}}>
                <Container>
                    <Typography mb={2} fontWeight='bold' variant="body2" align="center">
                        Statistics
                    </Typography>
                    <Typography mb={2} variant="h5" align="center">
                        Birds eye view
                    </Typography>

                    <Grid container={true} spacing={2} justifyContent="center">
                        <Grid item={true} xs={12} sm={6} md={3}>
                            <Stat value={2000} title="Clients"/>
                        </Grid>
                        <Grid item={true} xs={12} sm={6} md={3}>
                            <Stat value={20} title="Years"/>
                        </Grid>
                        <Grid item={true} xs={12} sm={6} md={3}>
                            <Stat value={20} title="Products"/>
                        </Grid>
                        <Grid item={true} xs={12} sm={6} md={3}>
                            <Stat value={30} title="Staff"/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box pt={8} pb={8} sx={{backgroundColor: 'background.dark'}}>
                <Container>
                    <Typography mb={2} fontWeight='bold' variant="body2" align="center">SERVICES</Typography>
                    <Typography mb={2} variant="h5" align="center">
                        What Can We Do?
                    </Typography>
                    <Grid mb={2} container={true} justifyContent="center">
                        <Grid item={true}>
                            <Divider
                                variant="middle"
                                sx={{
                                    justifyContent: "center",
                                    backgroundColor: "secondary.main",
                                    height: 5,
                                    width: 100
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Typography mb={2} variant="body2" align="center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo.
                    </Typography>
                    <Grid container={true} spacing={3}>
                        {services.slice(0, 3).map((service, index) => {
                            return (
                                <Grid key={index} item={true} xs={12} md={4}>
                                    <Service service={service}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                    <Grid container={true} justifyContent="flex-end">
                        <Grid item={true}>
                            <Link
                                className={classes.link}
                                to="/services"
                                onClick={() => dispatch(UI_ACTION_CREATORS.changeActivePath('/services'))}>
                                <Button
                                    variant="text"
                                    size="large"
                                    endIcon={<ChevronRight/>}>
                                    View all Services
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box pt={8} pb={8} sx={{backgroundColor: 'background.light'}}>
                <Container>
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={6}>
                            <img className={classes.whyChooseUsImage} src="/assets/about-background-image.jpg" alt=""/>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <Typography mb={2} variant="h6">Choose Us</Typography>
                            <Typography mb={2} variant="h4">Why Choose Us?</Typography>
                            <Typography mb={2} variant="body2">
                                Fusce feugiat urna vel mi sodales, in vestibulum odio cond imentum. Proin inter dum
                                facilisis
                                odio cursus. Proin inter dum facilisis odio cursus.?
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemAvatar>
                                        <img className={classes.icon} src="/assets/about-background-image.jpg" alt=""/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={<Typography variant="h6">Why Choose Us?</Typography>}
                                        secondary={
                                            <Typography variant="body2">
                                                Fusce feugiat urna vel mi sodales, in vestibulum odio cond imentum.
                                            </Typography>
                                        }

                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <img className={classes.icon} src="/assets/about-background-image.jpg" alt=""/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={<Typography variant="h6">Why Choose Us?</Typography>}
                                        secondary={
                                            <Typography variant="body2">
                                                Fusce feugiat urna vel mi sodales, in vestibulum odio cond imentum.
                                            </Typography>
                                        }

                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <img className={classes.icon} src="/assets/about-background-image.jpg" alt=""/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={<Typography variant="h6">Why Choose Us?</Typography>}
                                        secondary={
                                            <Typography variant="body2">
                                                Fusce feugiat urna vel mi sodales, in vestibulum odio cond imentum.
                                            </Typography>
                                        }

                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <img className={classes.icon} src="/assets/about-background-image.jpg" alt=""/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={<Typography variant="h6">Why Choose Us?</Typography>}
                                        secondary={
                                            <Typography variant="body2">
                                                Fusce feugiat urna vel mi sodales, in vestibulum odio cond imentum.
                                            </Typography>
                                        }

                                    />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box pb={8} pt={8} sx={{backgroundColor: 'background.dark'}}>
                <Container>
                    <Typography mb={2} fontWeight='bold' variant="h5" align="center">Get a free Quote</Typography>
                    <Grid container={true} justifyContent="center">
                        <Grid item={true} xs={12} md={6}>
                            <Card elevation={0}>
                                <CardContent>
                                    <form onSubmit={handleSubmit}>
                                        <Stack spacing={1.2}>
                                            <Grid container={true} justifyContent="space-between">
                                                <Grid item={true} xs={12} md={5.9}>
                                                    <TextField
                                                        required={true}
                                                        onChange={handleContactChange}
                                                        value={firstName}
                                                        label="First Name"
                                                        fullWidth={true}
                                                        variant="outlined"
                                                        placeholder="First Name"
                                                        name="firstName"
                                                        error={Boolean(error.firstName)}
                                                        helperText={error.firstName}
                                                        type="text"
                                                        size="medium"
                                                    />
                                                </Grid>
                                                <Grid item={true} xs={12} md={5.9}>
                                                    <TextField
                                                        required={true}
                                                        onChange={handleContactChange}
                                                        value={lastName}
                                                        label="Last Name"
                                                        fullWidth={true}
                                                        variant="outlined"
                                                        placeholder="Last Name"
                                                        name="lastName"
                                                        error={Boolean(error.lastName)}
                                                        helperText={error.lastName}
                                                        type="text"
                                                        size="medium"
                                                    />
                                                </Grid>
                                            </Grid>
                                            <TextField
                                                required={true}
                                                onChange={handleContactChange}
                                                value={email}
                                                label="Email"
                                                fullWidth={true}
                                                variant="outlined"
                                                placeholder="Email"
                                                name="lastName"
                                                error={Boolean(error.email)}
                                                helperText={error.email}
                                                type="email"
                                                size="medium"
                                                margin="normal"
                                            />

                                            <TextField
                                                required={true}
                                                onChange={handleContactChange}
                                                value={phone}
                                                label="Phone"
                                                fullWidth={true}
                                                variant="outlined"
                                                placeholder="Phone"
                                                name="phone"
                                                error={Boolean(error.phone)}
                                                helperText={error.phone}
                                                type="tel"
                                                size="medium"
                                                margin="normal"
                                            />

                                            <TextField
                                                required={true}
                                                onChange={handleContactChange}
                                                value={subject}
                                                label="Subject"
                                                fullWidth={true}
                                                variant="outlined"
                                                placeholder="Subject"
                                                name="subject"
                                                error={Boolean(error.subject)}
                                                helperText={error.subject}
                                                type="text"
                                                size="medium"
                                                margin="normal"
                                            />

                                            <TextField
                                                required={true}
                                                onChange={handleContactChange}
                                                value={message}
                                                label="Message"
                                                fullWidth={true}
                                                variant="outlined"
                                                placeholder="Message"
                                                name="message"
                                                multiline={true}
                                                minRows={5}
                                                error={Boolean(error.message)}
                                                helperText={error.message}
                                                type="text"
                                                size="medium"
                                                margin="normal"
                                            />

                                            <Grid container={true} justifyContent="center">
                                                <Grid item={true} xs={12} md={6}>
                                                    <Button
                                                        sx={{
                                                            fontWeight: 'bold',
                                                            borderWidth: 2,
                                                            paddingTop: 1.5,
                                                            paddingBottom: 1.5,
                                                            color: "secondary.main",
                                                            transition: 'all 300ms ease-out',
                                                            '&:hover': {
                                                                backgroundColor: "secondary.main",
                                                                color: "primary.main"
                                                            },
                                                            mt: 2
                                                        }}
                                                        color="primary"
                                                        variant="contained"
                                                        disableElevation={true}
                                                        fullWidth={true}>
                                                        Send Note
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box pb={8} pt={8} sx={{backgroundColor: 'background.light'}}>
                <Container>
                    <Grid mb={2} container={true} justifyContent="center">
                        <Grid item={true} xs={12}>
                            <Typography mb={2} fontWeight='bold' variant="body2" align="center">
                                LET'S CONNECT WITH US
                            </Typography>
                            <Typography mb={2} variant="h5" align="center">
                                Do You Have Any Questions?
                            </Typography>
                            <Typography mb={2} variant="body2" align="center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                                ullamcorper mattis, pulvinar dapibus leo.
                            </Typography>

                        </Grid>
                        <Grid item={true} xs={12} md={3}>
                            <Link to="/contact"
                                  onClick={() => dispatch(UI_ACTION_CREATORS.changeActivePath('/contact'))}>

                            </Link>
                            <Button fullWidth={true} variant="outlined" size="large">Contact Us</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box pb={8} pt={8} sx={{backgroundColor: 'background.dark'}}>
                <Container>
                    <Typography mb={2} fontWeight='bold' variant="body2" align="center">Testimonials</Typography>
                    <Typography mb={2} variant="h5" align="center">
                        What Our Member says
                    </Typography>
                    <Typography mb={2} variant="body2" align="center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo.
                    </Typography>

                    <Grid container={true} spacing={3}>
                        {testimonials.slice(0, 6).map((testimonial, index) => {
                            return (
                                <Grid key={index} item={true} xs={12} md={4}>
                                    <Testimonial testimonial={testimonial}/>
                                </Grid>
                            )
                        })}
                    </Grid>

                    <Grid container={true} justifyContent="flex-end">
                        <Grid item={true}>
                            <Link
                                className={classes.link}
                                to="/testimonials"
                                onClick={() => dispatch(UI_ACTION_CREATORS.changeActivePath('/testimonials'))}>
                                <Button
                                    variant="text"
                                    size="large"
                                    endIcon={<ChevronRight/>}>
                                    View all Testimonials
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </Layout>
    )
}

export default HomePage;
