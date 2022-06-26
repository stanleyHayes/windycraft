import {Card, CardContent, Grid, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";

const CoreValue = ({value}) => {

    return (
        <Card elevation={0} sx={{height: '100%'}}>
            <CardContent>
                <Grid container={true} justifyContent="center">
                    <Grid item={true}>
                        {value.icon}
                    </Grid>
                </Grid>
                <Typography
                    mb={2}
                    sx={{color: 'primary.main'}}
                    variant="h5"
                    align="center">{value.name}</Typography>
                <Typography paragraph={true} sx={{color: grey['600'], fontWeight: 500}} align="center">{value.description}</Typography>
            </CardContent>
        </Card>
    )
}

export default CoreValue;
