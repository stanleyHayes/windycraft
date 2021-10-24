import {Card, CardContent, Grid, Typography} from "@mui/material";
import React from "react";
import {makeStyles} from "@mui/styles";
import {grey} from "@mui/material/colors";

const ContactCard = ({label, value, icon}) => {

    const useStyles = makeStyles(() => {
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
                <Typography align="center" variant="h6">{label}</Typography>
                <Typography
                    sx={{fontWeight: 600, color: grey['600']}}
                    align="center"
                paragraph={true}>
                    {value}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ContactCard;
