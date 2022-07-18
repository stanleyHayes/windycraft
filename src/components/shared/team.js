import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import SocialLink from "./social-link";
import {grey} from "@mui/material/colors";

const Team = ({team}) => {
    return (
        <Card elevation={1} variant="outlined">
            <CardMedia
                sx={{height: 200, objectFit: 'cover', objectPosition: 'center'}}
                component="img"
                src={team.image}
                alt={team.title}/>
            <CardContent>
                <Typography align="center" variant="h6" mb={1}>{team.name}</Typography>
                <Typography
                    sx={{color: grey['500'], textTransform: 'uppercase'}}
                    align="center"
                    variant="body2"
                    mb={2}>
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
