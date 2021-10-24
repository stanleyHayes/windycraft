import {Card, CardContent, Typography} from "@mui/material";
import {blue, brown, green, grey, red} from "@mui/material/colors";

const Process = ({process, index}) => {

    const  getColor = index => {
        switch (index) {
            case 0:
                return  green['600'];
            case 1:
                return red['600'];
            case 2:
                return brown['600'];
            case 3:
                return blue['600'];
            default:
                return  green['600'];
        }
    }

    return (
        <Card
            elevation={0}
            sx={{
                height: 200,
                backgroundColor: getColor(index),
                borderRadius: 0
            }}>
            <CardContent>
                <Typography
                    mb={1}
                    sx={{color: grey['100']}}
                    variant="h2">{process.number}
                </Typography>
                <Typography
                    mb={1}
                    sx={{color: grey['100']}}
                    variant="h5"
                    fontWeight="bold">
                    {process.title}
                </Typography>

                <Typography
                    sx={{color: grey['300']}}
                    variant="body2">
                    {process.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Process;
