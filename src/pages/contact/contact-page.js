import React, {useState} from "react";
import Layout from "../../components/layout/layout";
import Banner from "../../components/shared/banner";
import {
    Alert, AlertTitle,
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    LinearProgress,
    TextField,
    Typography
} from "@mui/material";
import {
    CalendarToday,
    Close,
    Email,
    LocalPostOffice,
    LocationCity,
    Phone,
    Schedule
} from "@mui/icons-material";
import ContactCard from "../../components/shared/contact-card";
import IconTextview from "../../components/shared/icon-textview";
import validator from "validator";
import {MESSAGES_ACTION_CREATORS} from "../../redux/messages/messages-action-creators";
import {useDispatch, useSelector} from "react-redux";
import {selectMessages} from "../../redux/messages/messages-reducer";

const ContactPage = () => {

    const [contact, setContact] = useState({
        firstName: '', lastName: '', subject: '', message: '', email: '', phone: ''
    });
    const [error, setError] = useState({});
    const {firstName, lastName, email, phone, subject, message} = contact;

    const handleContactChange = event => {
        setContact({...contact, [event.target.name]: event.target.value});
    }

    const dispatch = useDispatch();

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
            setError({error, firstName: 'Invalid email'});
            return;
        } else {
            setError({error, email: null});
        }

        if (!phone) {
            setError({error, phone: 'Email required'});
            return;
        } else {
            setError({error, phone: null});
        }

        if (!validator.isMobilePhone(phone)) {
            setError({error, phone: 'Invalid phone'});
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
        dispatch(MESSAGES_ACTION_CREATORS.createMessage(contact));
        setContact({
            firstName: '', lastName: '', subject: '', message: '', email: '', phone: ''
        });
    }

    const {messageLoading, messageError, message: response} = useSelector(selectMessages);

    return (
        <Layout>
            <Box pb={8} sx={{backgroundColor: 'background.dark'}}>
                <div>
                    <Banner
                        title="Contact"
                        links={[{label: 'Home', link: '/'}, {label: 'Contact', link: '/contact'}]}
                        backgroundImage="/assets/about-background-image.jpg"
                    />
                </div>
                <Box mt={8}>
                    <Container>
                        <Grid container={true} spacing={3}>
                            <Grid item={true} xs={12} sm={6} md={3}>
                                <ContactCard 
                                link={`mailto://info@supercraftgh.com`} 
                                icon={<Email/>} label="Email" value="info@supercraftgh.com"/>
                            </Grid>
                            <Grid item={true} xs={12} sm={6} md={3}>
                                <ContactCard 
                                    link={`tel://+233501597254`} 
                                    icon={<Phone/>} 
                                    label="Phone" 
                                    value="+233501597254"
                                />
                            </Grid>
                            <Grid item={true} xs={12} sm={6} md={3}>
                                <ContactCard
                                     icon={<LocationCity/>}
                                    label="Address" 
                                    value="Oyarifa - Yellow House(Aburi road)"
                                    />
                            </Grid>
                            <Grid item={true} xs={12} sm={6} md={3}>
                                <ContactCard 
                                    icon={<LocalPostOffice/>} 
                                    label="Post Office" 
                                    value="P.O.Box AF 1094,Adenta-Accra"/>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <Box mt={8}>
                    <Container>
                        <Grid container={true} spacing={4} justifyContent="space-around">
                            <Grid item={true} xs={12} md={8}>
                                <Card elevation={0}>
                                    {messageLoading && <LinearProgress color="secondary" variant="query"/>}
                                    <CardContent>
                                        {
                                            messageError && (
                                                <Alert variant="standard" elevation={0} severity="error">
                                                    <AlertTitle>{messageError}</AlertTitle>
                                                </Alert>
                                            )
                                        }
                                        {
                                            response && (
                                                <Alert variant="standard" elevation={0} severity="success">
                                                    <AlertTitle>{response}</AlertTitle>
                                                </Alert>
                                            )
                                        }
                                        <form onSubmit={handleSubmit}>
                                            <Box>
                                                <Typography align="center" variant="h5" mb={2}>Contact Form</Typography>
                                                <Typography align="center" variant="body2" mb={2}>
                                                    Send us a message
                                                </Typography>

                                                <Grid container={true} spacing={2}>
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
                                                            margin="dense"
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
                                                            margin="dense"
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
                                                    placeholder="Enter Email"
                                                    name="email"
                                                    error={Boolean(error.email)}
                                                    helperText={error.email}
                                                    type="email"
                                                    size="medium"
                                                    margin="dense"
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
                                                    margin="dense"
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
                                                    margin="dense"
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
                                                    margin="dense"
                                                />

                                                <Grid mt={2} container={true} justifyContent="center">
                                                    <Grid xs={12} item={true}>
                                                        <Button
                                                            disabled={messageLoading}
                                                            onClick={handleSubmit}
                                                            onSubmit={handleSubmit}
                                                            disableElevation={true}
                                                            sx={{
                                                                borderWidth: 2,
                                                                paddingTop: 1.5,
                                                                paddingBottom: 1.5,
                                                                fontWeight: 'bold',
                                                                backgroundColor: "primary.main",
                                                                color: "secondary.main",
                                                                transition: 'all 300ms ease-out',
                                                                '&:hover': {
                                                                    backgroundColor: "secondary.main",
                                                                    color: "primary.main"
                                                                }
                                                            }}
                                                            variant="contained"
                                                            fullWidth={true}>
                                                            Send Message
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </form>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item={true} xs={12} md={4}>
                                <Card elevation={0}>
                                    <CardContent>
                                        <Typography variant="h5" mb={2}>Open Hours</Typography>

                                        <Typography variant="body1">Working Hours</Typography>
                                        <IconTextview icon={<Schedule/>} text="8:30 AM - 5:30 PM"/>

                                        <Typography mt={2} variant="body1">Working Days</Typography>
                                        <IconTextview icon={<CalendarToday/>} text="Monday - Friday"/>

                                        <Typography mt={2} variant="body1">Saturday</Typography>
                                        <IconTextview icon={<Schedule/>} text="8:30 AM - 5:30 PM"/>

                                        <Typography mt={2} variant="body1">Sunday</Typography>
                                        <IconTextview icon={<Close/>} text="Closed"/>

                                        <Typography mt={2} variant="body1">Holidays</Typography>
                                        <IconTextview icon={<Schedule/>} text="8:30 AM - 5:30 PM"/>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Layout>
    )
}

export default ContactPage;
