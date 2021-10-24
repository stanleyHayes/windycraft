import {Card, CardContent, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";

const FAQ = ({faq}) => {
    return (
        <Card elevation={1}>
            <CardContent>
                <Typography mb={2} sx={{fontWeight: 600}} variant="body1">{faq.question}</Typography>
                <Typography sx={{fontWeight: 400, color: grey['600']}} variant="body2">{faq.question}</Typography>
            </CardContent>
        </Card>
    )
}

export default FAQ;
