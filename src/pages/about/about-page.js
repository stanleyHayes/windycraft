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
import {selectProcesses} from "../../redux/process/process-reducer";
import Process from "../../components/shared/process";
import {selectFAQs} from "../../redux/faqs/faq-reducer";
import FAQ from "../../components/shared/faq";
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
    const {processes} = useSelector(selectProcesses);
    const {faqs} = useSelector(selectFAQs);

    const mission = {
        icon: <Lightbulb sx={{color: 'secondary.main'}}/>,
        name: 'Mission',
        description: 'Complex jobs. Difficult installations. Artistic beauty. Creativity is found across our wide breadth of work. Complex jobs. Difficult installations. Artistic beauty. Creativity is found across our wide breadth of work.'
    };
    const vision = {
        icon: <Lightbulb sx={{color: 'secondary.main'}}/>,
        name: 'Vision',
        description: 'Complex jobs. Difficult installations. Artistic beauty. Creativity is found across our wide breadth of work. Complex jobs. Difficult installations. Artistic beauty. Creativity is found across our wide breadth of work.'
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
                                Welcome to Windy Craft
                            </Typography>
                            <Typography sx={{color: grey['600'], fontWeight: 500}} mb={1} align="center"
                                        paragraph={true}>
                                We’re an architectural metal company that makes and installs building facades,
                                decorative
                                exteriors,
                                custom railing, and really anything architectural you can imagine with metal. We’re an
                                architectural metal company that makes and installs building facades, decorative
                                exteriors,
                                custom railing, and really anything architectural you can imagine with metal.
                            </Typography>
                            <Typography sx={{color: grey['600'], fontWeight: 500}} mb={1} align="center"
                                        paragraph={true}>
                                We’re an architectural metal company that makes and installs building facades,
                                decorative
                                exteriors,
                                custom railing, and really anything architectural you can imagine with metal. We’re an
                                architectural metal company that makes and installs building facades, decorative
                                exteriors,
                                custom railing, and really anything architectural you can imagine with metal.
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
                                    }} mb={1} variant='h4'>Stanley Hayford</Typography>
                                <Typography
                                    sx={{
                                        fontWeight: 'bold',
                                        color: "secondary.main",
                                        textTransform: 'uppercase'
                                    }}
                                    variant="body2" mb={4}>Founder</Typography>
                                <Typography sx={{color: grey['600'], fontWeight: 500}} paragraph={true} mb={4}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore dolore magna aliquyam erat, sed diam
                                    voluptua.
                                    At
                                    vero eos et accusam justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                                    takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                    consetetur
                                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
                                </Typography>

                                <Typography variant="h3">Signature</Typography>
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

            <Box pt={8} pb={8} sx={{backgroundColor: 'background.light'}}>
                <Container>
                    <Typography mb={2} variant="h4" align="center">Our Process</Typography>
                    <Typography sx={{color: grey['600'], fontWeight: 500}} mb={2} paragraph={true} align="center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </Typography>
                </Container>
                <Grid container={true}>
                    <Grid container={true}>
                        {processes.map((process, index) => {
                            return (
                                <Grid key={index} item={true} xs={12} md={3}>
                                    <Process index={index} process={process}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Box>

            <Box pt={8} pb={8} sx={{backgroundColor: 'background.dark'}}>
                <Container>
                    <Typography mb={2} variant="h4" align="center">FAQ</Typography>
                    <Typography sx={{color: grey['600'], fontWeight: 500}} mb={2} variant="body2" align="center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </Typography>
                    <Grid container={true} spacing={3}>
                        {faqs && faqs.map((faq, index) => {
                            return (
                                <Grid item={true} key={index} xs={12} md={4}>
                                    <FAQ faq={faq} index={index + 1}/>
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
