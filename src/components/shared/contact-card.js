import {Card, CardContent, Grid, Typography, Link} from "@mui/material";
import React from "react";
import {grey} from "@mui/material/colors";

const ContactCard = ({label, value, icon, link}) => {


    return (
        <Link href={link} target="_blank" underline="none">
            <Card elevation={0} sx={{height: '100%'}}>
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
        </Link>
    )
}

export default ContactCard;
