import React from "react";
import Layout from "../../components/layout/layout";
import {makeStyles} from "@mui/styles";
import Banner from "../../components/shared/banner";

const PortfolioPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {}
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <div className={classes.container}>
                <Banner
                    title="Portfolio"
                    links={[{label: 'Home', link: '/'}, {label: 'Portfolio', link: '/portfolio'}]}
                    backgroundImage="/assets/about-background-image.jpg"
                />
            </div>
        </Layout>
    )
}

export default PortfolioPage;
