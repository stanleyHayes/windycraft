import React from "react";
import Layout from "../../components/layout/layout";
import {makeStyles} from "@mui/styles";
import Banner from "../../components/shared/banner";
import {Box, Container, Grid} from "@mui/material";
import {useSelector} from "react-redux";
import {selectServices} from "../../redux/services/service-reducer";
import Service from "../../components/shared/service";

const ServicesPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {}
        }
    });

    const classes = useStyles();

    const {services} = useSelector(selectServices);

    return (
        <Layout>
            <div className={classes.container}>
                <Banner
                    title="Services"
                    links={[{label: 'Home', link: '/'}, {label: 'Services', link: '/services'}]}
                    backgroundImage="/assets/about-background-image.jpg"
                />
            </div>
            <Box pt={8}>
                <Container>
                    <Grid container={true} spacing={3}>
                        {services.map((service, index) => {
                            return (
                                <Grid key={index} item={true} xs={12} md={4}>
                                    <Service service={service} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default ServicesPage;
