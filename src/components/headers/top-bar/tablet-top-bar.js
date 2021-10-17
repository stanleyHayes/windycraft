import React from "react";
import {Toolbar} from "@mui/material";
import {makeStyles} from "@mui/styles";

const TabletTopBar = () => {
    const useStyles = makeStyles(theme => {
        return {
            toolbar: {

            }
        }
    });

    const classes = useStyles();

    return (
        <Toolbar className={classes.toolbar}>

        </Toolbar>
    )
}

export default TabletTopBar;
