import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";

const Service = ({service}) => {
    return (
        <Card elevation={0} sx={{height: '100%'}}>
            <CardMedia
                sx={{height: 200, objectFit: 'cover', objectPosition: 'center'}}
                component="img"
                src={service.image}
                alt={service.title}/>
            <CardContent>
                <Typography align="center" variant="h6" mb={2}>{service.title}</Typography>
                <Typography
                    sx={{color: grey['600'], fontWeight: 500}}
                    align="center"
                    variant="body2">
                    {service.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Service;
