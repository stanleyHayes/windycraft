import {Avatar, Card, CardContent, CardHeader, Divider, Grid, Rating, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import {FormatQuoteOutlined} from "@mui/icons-material";

const Testimonial = ({testimonial}) => {
    return (
        <Card elevation={0}>
            <CardContent>
                <Grid container={true} justifyContent="flex-start">
                    <Grid item={true}>
                        <FormatQuoteOutlined sx={{fontSize: 14, color: grey['500']}}/>
                    </Grid>
                </Grid>
                <Typography
                    fontWeight={500}
                    sx={{color: grey['500']}}
                    paragraph={true}>
                    {testimonial.review}
                </Typography>
                <Grid container={true} justifyContent="flex-end">
                    <Grid item={true}>
                        <FormatQuoteOutlined sx={{fontSize: 14, color: grey['500']}}/>
                    </Grid>
                </Grid>
            </CardContent>
            <Divider variant="fullWidth" light={true}/>
            <CardHeader
                subheader={
                    <Rating
                        size="small"
                        readOnly={true}
                        precision={.5}
                        value={testimonial.rating}/>}
                title={<Typography
                    fontWeight='bold'
                    sx={{color: grey['600']}}
                    variant="body1">
                    {`${testimonial.user.firstName}${testimonial.user.lastName}`}
                </Typography>}
                avatar={
                    <Avatar
                        sx={{
                            borderWidth: 3,
                            borderStyle: 'solid',
                            borderColor: 'secondary.main',
                            backgroundColor: 'white'
                        }}
                        variant="circular">
                        <Typography
                            sx={{fontWeight: 'bold', color: 'secondary.main'}}
                            variant="body2">
                            {`${testimonial.user.firstName[0]}${testimonial.user.lastName[0]}`}
                        </Typography>
                    </Avatar>
                }
            />
        </Card>
    )
}

export default Testimonial;
