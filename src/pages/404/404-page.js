import React from "react";
import Layout from "../../components/layout/layout";
import {makeStyles} from "@mui/styles";
import {Container, Typography} from "@mui/material";

const NotFoundPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {}
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Container className={classes.container}>
                <Typography variant="h2" align="center">Not Found Page</Typography>
            </Container>
        </Layout>
    )
}

export default NotFoundPage;
