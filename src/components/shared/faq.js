import {Box, Card, CardContent, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";

const FAQ = ({faq, index}) => {
    return (
        <Card elevation={0}>
            <CardContent>
                <Box>
                    <Typography
                        sx={{
                            borderRadius: 1,
                            backgroundColor: 'primary.main',
                            color: 'secondary.main',
                            padding: 0.5,
                            display: 'inline'
                        }}
                        variant="h3">
                        {index < 10 ? `0${index}` : index}
                    </Typography>
                </Box>
                <Typography
                    mt={2}
                    mb={2}
                    sx={{fontWeight: 600}}
                    variant="body1">
                    {faq.question}
                </Typography>

                <Typography
                    sx={{
                        fontWeight: 400, color: grey['600']
                    }}
                    paragraph={true}>
                    {faq.question}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default FAQ;
