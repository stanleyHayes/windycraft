import React from "react";
import {Grid, Link as MUILink, Toolbar} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {
    Facebook,
    Instagram,
    Twitter,
    YouTube
} from "@mui/icons-material";

const MobileTopBar = () => {
    const useStyles = makeStyles(theme => {
        return {
            toolbar: {}
        }
    });

    const classes = useStyles();

    return (
        <Toolbar
            sx={{backgroundColor: 'secondary.main'}}
            className={classes.toolbar}
            variant="dense">
            <Grid
                container={true}
                justifyContent="space-around"
                alignItems="center">
                <Grid item={true}>
                    <MUILink><Twitter
                        sx={{
                            color: "primary.main",
                            marginRight: 1
                        }}/></MUILink>
                    <MUILink><Facebook
                        sx={{
                            color: "primary.main",
                            marginRight: 1
                        }}/></MUILink>
                    <MUILink><Instagram
                        sx={{
                            color: "primary.main",
                            marginRight: 1
                        }}/></MUILink>
                    <MUILink><YouTube
                        sx={{
                            color: "primary.main"
                        }}
                    /></MUILink>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default MobileTopBar;
