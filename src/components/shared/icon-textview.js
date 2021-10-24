import {Stack, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";

const IconTextview = ({icon, text, color = grey['600']}) => {

    return (
        <Stack direction="row" spacing={1}>
            {icon}
            <Typography sx={{color: color, fontWeight: 'bold'}} variant="body2">{text}</Typography>
        </Stack>
    )
}

export default IconTextview;
