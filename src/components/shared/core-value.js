import {Card, CardContent, Grid, Typography} from "@mui/material";

const CoreValue = ({value}) => {

    return (
        <Card elevation={0}>
            <CardContent>
                <Grid container={true} justifyContent="center">
                    <Grid item={true}>
                        {value.icon}
                    </Grid>
                </Grid>
                <Typography
                    mb={2}
                    sx={{color: 'secondary.main'}}
                    variant="h5"
                    align="center">{value.name}</Typography>
                <Typography variant="body1" align="center">{value.description}</Typography>
            </CardContent>
        </Card>
    )
}

export default CoreValue;
