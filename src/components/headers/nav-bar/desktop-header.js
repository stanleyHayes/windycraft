import React from "react";
import {Grid, Link as MUILink, Stack, Toolbar} from "@mui/material";
import {makeStyles} from "@mui/styles";
import LinkItem from "../../shared/link-item";
import {Link} from "react-router-dom";
import {Facebook, Instagram} from "@mui/icons-material";
import logo from "./../../../assets/images/logo.png";

const DesktopHeader = () => {
    const useStyles = makeStyles(theme => {
        return {
            toolbar: {},
            link: {
                textDecoration: 'none'
            },
            brand: {}
        }
    });

    const classes = useStyles();


    return (
        <Toolbar className={classes.toolbar} variant="regular">
            <Grid container={true} justifyContent="space-around" alignItems="center">
                <Grid item={true}>
                <Link to="/" className={classes.link}>
                        <img src={logo} alt="logo" style={{width: 50, height: 50}} />
                    </Link>
                </Grid>
                <Grid item={true}>
                    <Stack direction="row" spacing={2}>
                        <LinkItem label="Home" path="/"/>
                        <LinkItem label="About" path="/about"/>
                        <LinkItem label="Services" path="/services"/>
                        <LinkItem label="Contact" path="/contact"/>
                        {/*<LinkItem label="Portfolio" path="/portfolio"/>*/}
                        {/* <LinkItem label="Testimonial" path="/testimonials"/> */}
                    </Stack>
                </Grid>
                <Grid item={true}>
                    <MUILink  href="#" underline="none" target="_blank"><Facebook
                        sx={{
                            color: "primary.main",
                            marginRight: 1,
                            backgroundColor: 'secondary.main',
                            borderRadius: 1,
                            p: .5,
                            fontSize: 32
                        }}/></MUILink>
                    <MUILink  href="#" underline="none" target="_blank"><Instagram
                        sx={{
                            color: "primary.main",
                            marginRight: 1,
                            backgroundColor: 'secondary.main',
                            borderRadius: 1,
                            p: .5,
                            fontSize: 32
                        }}/></MUILink>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default DesktopHeader;
