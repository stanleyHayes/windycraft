import {Stack, Typography, Link} from "@mui/material";
import {grey} from "@mui/material/colors";

const IconTextview = ({icon, text, color = grey['600'], link}) => {

    return (
        <Link underline="none" target="_blank" href={link}>
            <Stack direction="row" spacing={1} alignItems="center">
                {icon}
                <Typography sx={{color: color, fontWeight: 'bold'}} variant="body2">{text}</Typography>
            </Stack>
        </Link>
    )
}

export default IconTextview;
