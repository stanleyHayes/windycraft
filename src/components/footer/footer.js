import React from "react";
import {Container} from "@mui/material";
import {makeStyles} from "@mui/styles";

const Footer = () => {
    const useStyles = makeStyles(theme => {
        return {
            container: {}
        }
    });

    const classes = useStyles();

    return (
        <Container className={classes.container}>

        </Container>
    )
}

export default Footer;
