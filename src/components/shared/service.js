import {Card, CardContent, CardMedia, Typography} from "@mui/material";

const Service = ({service}) => {
    return (
        <Card elevation={0}>
            <CardMedia
                sx={{height: 300, objectFit: 'cover', objectPosition: 'center'}}
                component="img"
                src={service.image}
                alt={service.title}/>
            <CardContent
                sx={{
                    paddingTop: 4,
                    paddingBottom: 4,
                    px: 8
                }}>
                <Typography align="center" variant="h5" mb={2}>{service.title}</Typography>
                <Typography align="center" variant="body1">
                    {service.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Service;
