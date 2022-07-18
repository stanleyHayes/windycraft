import React, {useState} from "react";
import Layout from "../../components/layout/layout";
import {makeStyles} from "@mui/styles";
import {
    Alert, AlertTitle,
    Box,
    Button,
    Card,
    CardContent,
    Checkbox,
    Container,
    Divider,
    FormControlLabel,
    FormGroup,
    Grid, LinearProgress,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Stack,
    TextField,
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
import Stat from "../../components/shared/stat";
import {DatePicker} from "@mui/lab";
import validator from "validator";
import {selectQuotes} from "../../redux/quotes/quote-reducer";
import {QUOTES_ACTION_CREATORS} from "../../redux/quotes/quote-action-creators";

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

    const classes = useStyles();

    const mission = {
        icon: <Lightbulb/>,
        name: 'Mission',
        description: "Our mission is to provide exceptional services and deliver high-quality, cost-effective projects on schedule to meet or exceed the expectation of our customers. Fulfillment of customers' needs with a suitable level of quality is our main objective and essential element."
    };
    const vision = {
        icon: <Lightbulb/>,
        name: 'Vision',
        description: 'Our vision is to be recognized as a leading global company in metal fabrication and woodworking.'
    };

    const {services} = useSelector(selectServices);
    const {clients} = useSelector(selectClients);
    // const {testimonials} = useSelector(selectTestimonials);

    const dispatch = useDispatch();

    const [quote, setQuote] = useState({
        startDate: new Date(),
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        website: '',
        company: '',
        budget: '',
    });
    const [error, setError] = useState({});
    const [selectedServices, setSelectedServices] = useState([]);

    const handleSelectService = service => {
        const index = selectedServices.findIndex(s => s._id === service._id);
        if (index === -1) setSelectedServices([...selectedServices, service]);
        else setSelectedServices(selectedServices.filter(s => s._id !== service._id));
    }

    const {quoteLoading, quoteError, message: response} = useSelector(selectQuotes);
    const {
        firstName,
        lastName,
        email,
        phone,
        subject,
        message,
        website,
        company,
        startDate,
        budget,
    } = quote;

    const handleContactChange = event => {
        setQuote({...quote, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (!firstName) {
            setError({error, firstName: 'First name required'});
            return;
        } else {
            setError({error, firstName: null});
        }

        if (!lastName) {
            setError({error, lastName: 'Last name required'});
            return;
        } else {
            setError({error, lastName: null});
        }

        if (!email) {
            setError({error, email: 'Email required'});
            return;
        } else {
            setError({error, email: null});
        }

        if (!validator.isEmail(email)) {
            setError({error, email: 'Invalid email'});
            return;
        } else {
            setError({error, email: null});
        }

        if (!phone) {
            setError({error, phone: 'Phone required'});
            return;
        } else {
            setError({error, phone: null});
        }

        if (!validator.isMobilePhone(phone)) {
            setError({error, phone: 'Phone required'});
            return;
        } else {
            setError({error, phone: null});
        }

        if (!subject) {
            setError({error, subject: 'Subject required'});
            return;
        } else {
            setError({error, subject: null});
        }

        if (!message) {
            setError({error, message: 'Message required'});
            return;
        } else {
            setError({error, message: null});
        }

        if (!budget) {
            setError({error, budget: 'Budget required'});
            return;
        } else {
            setError({error, budget: null});
        }

        if (Number(budget) < 0) {
            setError({error, budget: 'Invalid budget'});
            return;
        } else {
            setError({error, budget: null});
        }

        dispatch(QUOTES_ACTION_CREATORS.createQuote(
            {...quote, services: selectedServices}
        ));
        setQuote({
            startDate: new Date(),
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            website: '',
            company: '',
            budget: '',
        });
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
                                    variant="h2">Super Craft</Typography>
                                <Typography
                                    mb={3}
                                    sx={{
                                        color: 'white'
                                    }}
                                    align="center"                                 
                                    variant="h5">
                                    The home of blacksmith
                                </Typography>
                            </Grid>
                            <Grid
                                container={true}
                                spacing={2}
                                justifyContent="center"
                                alignItems="center">
                                <Grid item={true} xs={12} sm={6} md={3}>
                                    <a href="#submit-quote" className={classes.link}>
                                        <Button
                                            sx={{
                                                color: 'secondary.main'
                                            }}
                                            variant="contained"
                                            size="large"
                                            fullWidth={true}>
                                            Get a quote
                                        </Button>
                                    </a>
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
                        Our trusted partners
                    </Typography>
                    <Carousel
                        infinite={true}
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
                                        primary={<Typography variant="h6">Schedule-Driven</Typography>}
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
                                        primary={<Typography variant="h6">We manage complex projects exceptionally well</Typography>}
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
                                        primary={<Typography variant="h6">We make communication with all parties a top priority</Typography>}
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
                                        primary={<Typography variant="h6">We always have hands-on management for your project</Typography>}
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
                                        primary={<Typography variant="h6">We are flexible and versatile</Typography>}
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

            {/*Get a free quote Section*/}
            <Box id="submit-quote" pb={8} pt={8} sx={{backgroundColor: 'background.dark'}}>
                <Container>
                    <Typography mb={2} fontWeight='bold' variant="h5" align="center">Get a free Quote</Typography>
                    <Grid container={true} spacing={2} justifyContent="space-between">
                        <Grid item={true} xs={12} md={6}>
                            <Card elevation={0}>
                                {quoteLoading && (
                                    <LinearProgress variant="query" color="secondary"/>
                                )}
                                <CardContent>
                                    {
                                        response && (
                                            <Alert variant="standard" severity="success">
                                                <AlertTitle>{response}</AlertTitle>
                                            </Alert>
                                        )
                                    }

                                    {
                                        quoteError && (
                                            <Alert variant="standard" severity="error">
                                                <AlertTitle>{quoteError}</AlertTitle>
                                            </Alert>
                                        )
                                    }
                                    <Typography variant="h5" mb={2}>Personal Information</Typography>
                                    <form onSubmit={handleSubmit}>
                                        <Box>
                                            <Grid container={true} spacing={2} justifyContent="space-between">
                                                <Grid item={true} xs={12} md={6}>
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
                                                <Grid item={true} xs={12} md={6}>
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
                                                name="email"
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
                                                onChange={handleContactChange}
                                                value={company}
                                                label="Company"
                                                fullWidth={true}
                                                variant="outlined"
                                                placeholder="Enter company name"
                                                name="company"
                                                type="text"
                                                size="medium"
                                                margin="normal"
                                            />

                                            <TextField
                                                onChange={handleContactChange}
                                                value={website}
                                                label="Website"
                                                fullWidth={true}
                                                variant="outlined"
                                                placeholder="Website"
                                                name="website"
                                                error={Boolean(error.website)}
                                                helperText={error.website}
                                                type="url"
                                                size="medium"
                                                margin="normal"
                                            />

                                            <TextField
                                                required={true}
                                                onChange={handleContactChange}
                                                value={message}
                                                label="What exactly do you want?"
                                                fullWidth={true}
                                                variant="outlined"
                                                placeholder="Message"
                                                name="message"
                                                multiline={true}
                                                minRows={3}
                                                error={Boolean(error.message)}
                                                helperText={error.message}
                                                type="text"
                                                size="medium"
                                                margin="normal"
                                            />
                                        </Box>
                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item={true} xs={12} md={6}>
                            <Card elevation={0}>
                                <CardContent>
                                    <Typography variant="h5" mb={2}>Project Information</Typography>
                                    <form onSubmit={handleSubmit}>
                                        <Stack spacing={1.2}>
                                            <TextField
                                                required={true}
                                                onChange={handleContactChange}
                                                value={budget}
                                                label="Budget (GHS)"
                                                fullWidth={true}
                                                variant="outlined"
                                                placeholder="What's your budget in GHS"
                                                name="budget"
                                                error={Boolean(error.budget)}
                                                helperText={error.budget}
                                                type="number"
                                                size="medium"
                                            />

                                            <Typography gutterBottom={true} variant="body2">
                                                What services would you want?
                                            </Typography>
                                            <FormGroup>
                                                <Grid container={true}>
                                                    {services && services.map(service => {
                                                        return (
                                                            <Grid xs={12} md={6} item={true} key={service._id}>
                                                                <FormControlLabel
                                                                    control={
                                                                        <Checkbox
                                                                            checked={selectedServices.findIndex(s => s._id === service._id) !== -1}
                                                                            onChange={() => handleSelectService(service)}
                                                                        />} label={service.title}
                                                                />
                                                            </Grid>
                                                        )
                                                    })}
                                                </Grid>
                                            </FormGroup>

                                            <DatePicker
                                                rawValue={startDate}
                                                label="Project Start Date"
                                                value={startDate}
                                                onChange={(date) => {
                                                    setQuote({...quote, 'startDate': date})
                                                }}
                                                renderInput={
                                                    (params) =>
                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth={true}
                                                            placeholder="When do you want the project to be started?"
                                                            margin="normal"
                                                            label="Start Date" {...params} />}
                                            />

                                        

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
                                                onSubmit={handleSubmit}
                                                onClick={handleSubmit}
                                                disabled={quoteLoading}
                                                color="primary"
                                                variant="contained"
                                                disableElevation={true}
                                                fullWidth={true}>
                                                Send Quote
                                            </Button>
                                        </Stack>
                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/*Connect with us Section*/}
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

            {/*Testimonial Section*/}

            {/* {<Box pb={8} pt={8} sx={{backgroundColor: 'background.dark'}}>
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
            </Box>} */}

        </Layout>
    )
}

export default HomePage;
