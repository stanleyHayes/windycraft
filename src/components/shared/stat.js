import {Box, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import millify from "millify";

const Stat = ({title, value}) => {
    const useStyles = makeStyles(() => {
        return {
            root: {
                position: 'relative',
                height: 150,
            },
            titleContainer: {
                position: 'absolute',
                width: '100%',
                left: 0,
                right: 0,
                top: '20%',
                bottom: 0,
                display: 'flex',
                justifyContent: 'center'
            },
            valueContainer: {
                position: 'absolute',
                width: '100%',
                top: '35%',
                bottom: 0,
                zIndex: 100,
                display: 'flex',
                justifyContent: 'center'
            }
        }
    });

    const classes = useStyles();


    return (
        <Box className={classes.root}>
            <Box className={classes.titleContainer}>
                <Typography
                    sx={{
                        color: 'rgba(33, 37, 41, .2)',
                        fontWeight: 'bold',
                        fontSize: 48
                    }}
                    align="center" variant="h4">
                    {title}
                </Typography>
            </Box>
            <Box className={classes.valueContainer}>
                <Typography
                    sx={{
                        color: 'rgba(33, 37, 41, .7)',
                        width: '100%',
                        textAlign: 'center',
                        fontWeight: 800
                    }}
                    align="center" variant="h2">
                    {millify(value)}
                </Typography>
            </Box>
        </Box>
    )
}

export default Stat;
