import React from "react";
import {Grid, Link as MUILink, Stack, Toolbar, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import LinkItem from "../../shared/link-item";
import {Link} from "react-router-dom";
import {grey} from "@mui/material/colors";
import {Facebook, Instagram, Twitter, YouTube} from "@mui/icons-material";

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
                        <Typography
                            sx={{color: grey['300']}}
                            variant="h4"
                            className={classes.brand}>
                            Windy Craft
                        </Typography>
                    </Link>
                </Grid>
                <Grid item={true}>
                    <Stack direction="row" spacing={2}>
                        <LinkItem label="Home" path="/"/>
                        <LinkItem label="About" path="/about"/>
                        <LinkItem label="Services" path="/services"/>
                        <LinkItem label="Contact" path="/contact"/>
                        {/*<LinkItem label="Portfolio" path="/portfolio"/>*/}
                        <LinkItem label="Testimonial" path="/testimonials"/>
                    </Stack>
                </Grid>
                <Grid item={true}>
                    <MUILink><Twitter
                        sx={{
                            color: "primary.main",
                            marginRight: 1,
                            backgroundColor: 'secondary.main',
                            borderRadius: 1,
                            p: .5,
                            fontSize: 32
                        }}/></MUILink>
                    <MUILink><Facebook
                        sx={{
                            color: "primary.main",
                            marginRight: 1,
                            backgroundColor: 'secondary.main',
                            borderRadius: 1,
                            p: .5,
                            fontSize: 32
                        }}/></MUILink>
                    <MUILink><Instagram
                        sx={{
                            color: "primary.main",
                            marginRight: 1,
                            backgroundColor: 'secondary.main',
                            borderRadius: 1,
                            p: .5,
                            fontSize: 32
                        }}/></MUILink>
                    <MUILink><YouTube
                        sx={{
                            color: "primary.main",
                            marginRight: 1,
                            backgroundColor: 'secondary.main',
                            borderRadius: 1,
                            p: .5,
                            fontSize: 32
                        }}
                    /></MUILink>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default DesktopHeader;
