import React from "react";
import {Grid, Toolbar, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Menu} from "@mui/icons-material";
import {UI_ACTION_CREATORS} from "../../../redux/ui/ui-action-creators";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import logo from "./../../../assets/images/logo.png";

const MobileHeader = () => {
    const useStyles = makeStyles(theme => {
        return {
            toolbar: {},
            link: {
                textDecoration: 'none'
            }
        }
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Toolbar className={classes.toolbar}>
            <Grid container={true} spacing={2} alignItems="center" justifyContent="space-between">
            <Grid item={true}>
                    <Link to="/" className={classes.link}>
                        <img src={logo} alt="logo" style={{width: 40, height: 40}} />
                    </Link>
                </Grid>
                
                <Grid item={true}>
                    <Link to="/" className={classes.link}>
                        <Typography sx={{color: 'secondary.main'}} variant="h5">Super Craft</Typography>
                    </Link>
                </Grid>

                <Grid item={true}>
                    <Menu
                        sx={{
                            color: "secondary.main",
                            borderRadius: 0.5,
                            padding: 0.5,
                            width: 32,
                            height: 32,
                            backgroundColor: '#F9A34F40',
                            borderWidth: 2,
                            borderStyle: 'solid',
                            borderColor: "secondary.main"
                        }} onClick={() => dispatch(UI_ACTION_CREATORS.openSidebar())}/>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default MobileHeader;
