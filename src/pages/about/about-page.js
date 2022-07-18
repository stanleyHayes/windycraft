import React from "react";
import Layout from "../../components/layout/layout";
import {makeStyles} from "@mui/styles";
import Banner from "../../components/shared/banner";
import {Box, Container, Grid, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {selectTeams} from "../../redux/team/team-reducer";
import Team from "../../components/shared/team";
import CoreValue from "../../components/shared/core-value";
import {selectValues} from "../../redux/values/value-reducer";
import {Lightbulb} from "@mui/icons-material";
import {grey} from "@mui/material/colors";

const AboutPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {},
            ceoImage: {
                maxWidth: '100%',
                maxHeight: '100%',
                width: '100%',
                height: '100%',
                objectPosition: 'top',
                objectFit: 'cover'
            }
        }
    });

    const classes = useStyles();

    const {teams} = useSelector(selectTeams);
    const {values} = useSelector(selectValues);

    const mission = {
        icon: <Lightbulb sx={{color: 'secondary.main'}}/>,
        name: 'Mission',
        description: 'Our mission is to provide exceptional services and deliver high-quality, cost-effective projects on schedule to meet or exceed the expectation of our customers. Fulfillment of customers\' needs with a suitable level of quality is our main objective and essential element.'
    };
    const vision = {
        icon: <Lightbulb sx={{color: 'secondary.main'}}/>,
        name: 'Vision',
        description: 'Our vision is to be recognized as a leading global company in metal fabrication and woodworking.        '
    };

    return (
        <Layout>
            <div className={classes.container}>
                <Banner
                    title="About"
                    links={[{label: 'Home', link: '/'}, {label: 'About', link: '/about'}]}
                    backgroundImage="/assets/about-background-image.jpg"
                />
            </div>

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

            <Box pt={8} pb={8} sx={{backgroundColor: 'background.light'}}>
                <Container>
                    <Grid container={true} justifyContent="center" pt={8} pb={8}>
                        <Grid item={true} xs={12} md={8}>
                            <Typography mb={2} align="center" variant="h4">
                                Welcome to Supercraft Craft
                            </Typography>
                            <Typography variant="body2" sx={{color: grey['600'], fontWeight: 500}} mb={1} align="center">
                                Super Craft Wrought Iron and Wood Works Ltd is a metal fabrication and woodcraft company. We are also producers of structural and miscellaneous steel components in Ghana. Complex projects are our specialty; as a result, no project is burdensome for us.
                            </Typography>
                            <Typography variant="body2" sx={{color: grey['600'], fontWeight: 500}} mb={1} align="center">
                                Working with Super Craft means working with a skilled team that has profound knowledge in our line of work. From pricing and estimates to drawings and designs, welding engineers, and the general workforce.
We are proud of our accomplishments and have great confidence in our work
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box pt={8} pb={8} sx={{backgroundColor: 'background.dark'}}>
                <Container>
                    <Typography mb={2} variant="h4" align="center">Meet the Team</Typography>
                    <Grid container={true} spacing={2}>
                        {teams.map((team, index) => {
                            return (
                                <Grid key={index} item={true} xs={12} md={4}>
                                    <Team team={team}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>

            <Box sx={{minHeight: '60vh', backgroundColor: 'background.light'}}>
                <Grid container={true} spacing={4}>
                    <Grid item={true} xs={12} md={6}>
                        <Container
                            sx={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                width: '90%',
                                display: 'flex'
                            }}>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: {xs: 24, md: 48},
                                        fontWeight: 500
                                    }} mb={1} variant='h4'>Mr Augustus Aikon</Typography>
                                <Typography
                                    sx={{
                                        fontWeight: 'bold',
                                        color: "secondary.main",
                                        textTransform: 'uppercase'
                                    }}
                                    variant="body2" mb={4}>Founder</Typography>
                                <Typography sx={{color: grey['600'], fontWeight: 500}} paragraph={true} mb={4}>
                                Mr Augustus Aikon is a talented welding engineer with more than 20 years experience in the welding and fabrication. Mr. Aikon is skilled in reading and applying technical drawings .He has also operated various machinery to fabricate items and has consistently delivered high-quality products. He has successfully trained multiple apprentices and currently heads about 25 employees and apprentices.
                                </Typography>
                            </Box>
                        </Container>
                    </Grid>
                    <Grid item={true} xs={12} md={6} sx={{maxHeight: '100%'}}>
                        <img alt="" src="/assets/ceo.jpg" className={classes.ceoImage}/>
                    </Grid>
                </Grid>
            </Box>

            <Box pt={8} pb={8} sx={{backgroundColor: 'background.dark'}}>
                <Container>
                    <Typography mb={2} variant="h4" align="center">Our Core Values</Typography>
                    <Grid container={true} spacing={2}>
                        {values.map((value, index) => {
                            return (
                                <Grid key={index} item={true} xs={12} md={4}>
                                    <CoreValue value={value}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default AboutPage;
