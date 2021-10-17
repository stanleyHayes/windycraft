import React from "react";
import {Grid, Link as MUILink, Stack, Toolbar} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {
    CalendarToday,
    Email,
    Facebook,
    Instagram,
    Phone,
    Schedule,
    Twitter,
    YouTube
} from "@mui/icons-material";
import IconTextview from "../../shared/icon-textview";

const DesktopTopBar = () => {
    const useStyles = makeStyles(theme => {
        return {
            toolbar: {}
        }
    });

    const classes = useStyles();

    return (
        <Toolbar sx={{backgroundColor: 'secondary.main'}} className={classes.toolbar} variant="dense">
            <Grid container={true} justifyContent="space-around" alignItems="center">
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
                <Grid item={true}>
                    <Stack direction="row" spacing={2}>
                        <IconTextview
                            color={"primary.main"}
                            icon={<Phone sx={{color: "primary.main"}}/>}
                            text="+233270048319"/>
                        <IconTextview
                            color={"primary.main"}
                            icon={<Email sx={{color: "primary.main"}}/>}
                            text="hayfordstanley@gmail.com"/>
                        <IconTextview
                            color={"primary.main"}
                            icon={<CalendarToday sx={{color: "primary.main"}}/>}
                            text="Monday - Friday"/>
                        <IconTextview
                            color={"primary.main"}
                            icon={<Schedule sx={{color: "primary.main"}}/>}
                            text="8:30 AM - 5:30 PM"
                        />
                    </Stack>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default DesktopTopBar;
