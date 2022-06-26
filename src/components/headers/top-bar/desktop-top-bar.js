import React from "react";
import {Divider, Grid, Stack, Toolbar} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {
    CalendarToday,
    Email,
    Phone,
    Schedule,
} from "@mui/icons-material";
import IconTextview from "../../shared/icon-textview";

const DesktopTopBar = () => {
    const useStyles = makeStyles(() => {
        return {
            toolbar: {}
        }
    });

    const classes = useStyles();

    return (
        <Toolbar sx={{backgroundColor: 'secondary.main'}} className={classes.toolbar} variant="dense">
            <Grid container={true} justifyContent="center" alignItems="center">
                <Grid item={true}>
                    <Stack
                        divider={<Divider variant="fullWidth" light={true}/>}
                        direction="row"
                        spacing={2}>
                        <IconTextview
                            color={"primary.main"}
                            icon={<Phone sx={{color: "primary.main"}}/>}
                            text="+233270048319"/>
                        <IconTextview
                            color={"primary.main"}
                            icon={<Email sx={{color: "primary.main"}}/>}
                            text="info@supercraftgh.com"/>
                        <IconTextview
                            color={"primary.main"}
                            icon={<CalendarToday sx={{color: "primary.main"}}/>}
                            text="Monday - Friday"/>
                        <IconTextview
                            color={"primary.main"}
                            icon={<Schedule sx={{color: "primary.main"}}/>}
                            text="8:30 AM - 5:30 PM"
                        />
                        <IconTextview
                            color={"primary.main"}
                            icon={<CalendarToday sx={{color: "primary.main"}}/>}
                            text="Saturday"
                        />
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
