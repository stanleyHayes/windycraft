import {Card, CardMedia} from "@mui/material";

const Client = ({client}) => {

    return (
        <Card>
            <CardMedia
                src={client.image}
                component="img"
                sx={{
                    height: 150,
                    objectFit: 'cover',
                    objectPosition: 'center'
                }}
            />
        </Card>
    )
}

export default Client;
