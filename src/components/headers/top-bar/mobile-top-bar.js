import React from "react";
import {Grid, Link as MUILink, Toolbar} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {
    Facebook,
    Instagram,
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
                    <MUILink  href="#" underline="none" target="_blank"><Facebook
                        sx={{
                            color: "primary.main",
                            marginRight: 1
                        }}/></MUILink>
                    <MUILink href="#" underline="none" target="_blank"><Instagram
                        sx={{
                            color: "primary.main",
                            marginRight: 1
                        }}/></MUILink>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default MobileTopBar;
