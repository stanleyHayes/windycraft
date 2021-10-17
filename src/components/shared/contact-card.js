import {Card, CardContent, Grid, Typography} from "@mui/material";
import React from "react";
import {makeStyles} from "@mui/styles";

const ContactCard = ({label, value, icon}) => {

    const useStyles = makeStyles(theme => {
        return {
            card: {}
        }
    });

    const classes = useStyles();

    return (
        <Card elevation={0} className={classes.card}>
            <CardContent>
                <Grid container={true} justifyContent="center">
                    <Grid item={true}>
                        {icon}
                    </Grid>
                </Grid>
                <Typography align="center" variant="body2">{label}</Typography>
                <Typography
                    fontWeight="bold"
                    align="center"
                    variant="body1">
                    {value}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ContactCard;
