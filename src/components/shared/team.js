import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import SocialLink from "./social-link";

const Team = ({team}) => {
    return (
        <Card elevation={0}>
            <CardMedia
                sx={{height: 200, objectFit: 'cover', objectPosition: 'center'}}
                component="img"
                src={team.image}
                alt={team.title}/>
            <CardContent
                sx={{
                    padding: 8
                }}>
                <Typography align="center" variant="h5" mb={1}>{team.name}</Typography>
                <Typography align="center" variant="body1" mb={1}>
                    {team.position}
                </Typography>
                <Grid container={true} justifyContent="center" spacing={1}>
                    {team.accounts.map(account => {
                        return (
                            <Grid key={account.platform} item={true}>
                                <SocialLink account={account}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Team;
