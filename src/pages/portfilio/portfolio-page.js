import React from "react";
import Layout from "../../components/layout/layout";
import {makeStyles} from "@mui/styles";
import Banner from "../../components/shared/banner";
import {useSelector} from "react-redux";
import {selectPortfolio} from "../../redux/portfolio/portfolio-reducer";
import {Box, Grid} from "@mui/material";
import Portfolio from "../../components/shared/portfolio";

const PortfolioPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {}
        }
    });

    const classes = useStyles();

    const {projects} = useSelector(selectPortfolio);
    return (
        <Layout>
            <div className={classes.container}>
                <Banner
                    title="Portfolio"
                    links={[{label: 'Home', link: '/'}, {label: 'Portfolio', link: '/portfolio'}]}
                    backgroundImage="/assets/about-background-image.jpg"
                />
            </div>

            <Grid container={true}>

            </Grid>

            <Box>
                <Grid container={true}>
                    {projects.map((project, index) => {
                        return (
                            <Grid key={index} item={true} xs={12} md={4}>
                                <Portfolio project={project}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </Layout>
    )
}

export default PortfolioPage;
