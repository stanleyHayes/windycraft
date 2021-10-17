import React from "react";
import Layout from "../../components/layout/layout";
import {makeStyles} from "@mui/styles";
import Banner from "../../components/shared/banner";

const TestimonialsPage = () => {

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
                    title="Testimonials"
                    links={[{label: 'Home', link: '/'}, {label: 'Testimonial', link: '/testimonials'}]}
                    backgroundImage="/assets/about-background-image.jpg"
                />
            </div>
        </Layout>
    )
}

export default TestimonialsPage;
