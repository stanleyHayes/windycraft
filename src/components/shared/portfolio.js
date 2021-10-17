import {Box, Card, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const Portfolio = ({project}) => {

    const useStyles = makeStyles(theme => {
        return {
            card: {
                position: 'relative',
                height: 300
            },
            projectContent: {
                position: 'absolute',
                width: '100%',
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                zIndex: 10,
                paddingTop: 8,
                paddingBottom: 8

            },
            projectImage: {
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                right: 0,
                bottom: 0,
                top: 0,
            },
            container: {
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                height: '100%'
            }
        }
    });

    const classes = useStyles();

    return (
        <Card elevation={0} className={classes.card}>
            <Box className={classes.projectContent}>
                <Box className={classes.container}>
                    <Typography
                        sx={{
                            color: 'secondary.main',
                            textTransform: 'uppercase'
                        }}
                        align="center"
                        variant="h6">
                        {project.title}
                    </Typography>
                </Box>
            </Box>
            <img src={project.image} className={classes.projectImage} title={project.title} alt={project.title}/>
        </Card>
    )
}

export default Portfolio;
