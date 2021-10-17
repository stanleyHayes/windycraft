import React, {useState} from "react";
import Layout from "../../components/layout/layout";
import {makeStyles} from "@mui/styles";
import Banner from "../../components/shared/banner";
import {Box, Button, Card, CardContent, Container, Grid, Stack, TextField, Typography} from "@mui/material";
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

const ContactPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {},
        }
    });

    const classes = useStyles();

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
            <div className={classes.container}>
                <Banner
                    title="Contact"
                    links={[{label: 'Home', link: '/'}, {label: 'Contact', link: '/contact'}]}
                    backgroundImage="/assets/about-background-image.jpg"
                />
            </div>
            <Box mt={8}>
                <Container>
                    <Grid container={true} spacing={1}>
                        <Grid item={true} xs={12} sm={6} md={3}>
                            <ContactCard icon={<Email/>} label="Email" value="example@example.com"/>
                        </Grid>
                        <Grid item={true} xs={12} sm={6} md={3}>
                            <ContactCard icon={<Phone/>} label="Phone" value="+233270048319"/>
                        </Grid>
                        <Grid item={true} xs={12} sm={6} md={3}>
                            <ContactCard icon={<LocationCity/>} label="Address" value="Haatso Agbogba, Accra"/>
                        </Grid>
                        <Grid item={true} xs={12} sm={6} md={3}>
                            <ContactCard icon={<LocalPostOffice/>} label="Post Office" value="Box 410, Accra"/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box mt={8}>
                <Container>
                    <Grid container={true} spacing={4} justifyContent="space-around">
                        <Grid item={true} xs={12} md={8}>
                            <Card elevation={0}>
                                <CardContent>
                                    <form onSubmit={handleSubmit}>
                                        <Stack spacing={1}>
                                            <Typography align="center" variant="h5" mb={2}>Contact Form</Typography>
                                            <Typography align="center" variant="body2" mb={4}>
                                                Send us a message
                                            </Typography>

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
                                                        margin="dense"
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
                                                placeholder="Email"
                                                name="lastName"
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

                                            <Grid mt={8} container={true}>
                                                <Grid item={true} xs={12} sm={6}>
                                                    <Button
                                                        sx={{
                                                            borderWidth: 2,
                                                            paddingTop: 2,
                                                            paddingBottom: 2,
                                                            transition: 'all 300ms ease-out',
                                                            '&:hover': {
                                                                backgroundColor: "secondary.main",
                                                                color: "primary.main"
                                                            }
                                                        }}
                                                        color="secondary"
                                                        variant="outlined"
                                                        fullWidth={true}>
                                                        Send Message
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Stack>
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
        </Layout>
    )
}

export default ContactPage;
