import {makeStyles} from "@mui/styles";
import {Box, Breadcrumbs, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {ChevronRight} from "@mui/icons-material";

const Banner = ({backgroundImage, title, alt, links}) => {
    const useStyles = makeStyles(theme => {
        return {
            root: {
                position: 'relative',
                width: '100%',
                height: '20vh',
                backgroundColor: 'rgba(255, 255, 255, .35)',
                [theme.breakpoints.down('sm')]: {
                    height: '30vh'
                },
                [theme.breakpoints.up('md')]: {
                    height: '35vh'
                }
            },
            backgroundImage: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                height: '100%',
                width: '100%'
            },
            link: {
                textDecoration: 'none'
            },
            linkText: {
                fontWeight: 'bold',
                textTransform: 'uppercase'
            },
            bannerContent: {
                zIndex: 10,
                position: 'absolute',
                width: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.45)',
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center"
            },
            icon: {}
        }
    });

    const classes = useStyles();

    return (
        <Box
            className={classes.root}
            pt={4}
            pb={4}>
            <Box className={classes.bannerContent}>
                <Box>
                    <Typography
                        mb={5}
                        sx={{color: 'secondary.main'}}
                        variant="h4"
                        align="center">
                        {title}
                    </Typography>
                    <Grid container={true} justifyContent="center" alignItems="center">
                        <Breadcrumbs
                            separator={
                                <ChevronRight
                                    sx={{
                                        color: "secondary.main"
                                    }}
                                    className={classes.icon}/>}>
                            {links.map(link => (
                                <Link
                                    key={link.link}
                                    to={link.link}
                                    className={classes.link}>
                                    <Typography
                                        pt={0.5}
                                        pb={0.5}
                                        pl={1}
                                        pr={1}
                                        fontSize={12}
                                        fontWeight="bold"
                                        borderRadius={1}
                                        color="secondary.main"
                                        variant="body1"
                                        className={classes.linkText}>
                                        {link.label}
                                    </Typography>
                                </Link>
                            ))}
                        </Breadcrumbs>
                    </Grid>
                </Box>
            </Box>
            <img alt={alt} src={backgroundImage} className={classes.backgroundImage}/>
        </Box>
    )
}

export default Banner;
