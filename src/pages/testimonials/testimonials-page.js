import React, {useState} from "react";
import Layout from "../../components/layout/layout";
import {makeStyles} from "@mui/styles";
import Banner from "../../components/shared/banner";
import {Box, Button, Container, Grid} from "@mui/material";
import {Add} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {selectTestimonials} from "../../redux/testimonials/testimonial-reducer";
import Testimonial from "../../components/shared/testimonial";
import AddTestimonialDialog from "../../components/dialogs/add-testimonial-dialog";

const TestimonialsPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {}
        }
    });

    const classes = useStyles();

    const [testimonialDialogOpen, setTestimonialDialogOpen] = useState(false);

    const {testimonials} = useSelector(selectTestimonials);

    return (
        <Layout>
            <Box sx={{backgroundColor: 'background.dark'}}>
                <div className={classes.container}>
                    <Banner
                        title="Testimonials"
                        links={[{label: 'Home', link: '/'}, {label: 'Testimonial', link: '/testimonials'}]}
                        backgroundImage="/assets/about-background-image.jpg"
                    />
                </div>
                <Box pt={4} pb={4}>
                    <Container>

                        <Grid container={true} justifyContent="flex-end">
                            <Grid item={true} xs={12} md="auto">
                                <Button
                                    onClick={() => setTestimonialDialogOpen(true)}
                                    color="secondary"
                                    fullWidth={true}
                                    variant="contained"
                                    disableElevation={true}
                                    startIcon={<Add/>}
                                    size="large"
                                    sx={{borderWidth: 2, fontWeight: 'bold'}}>
                                    Add Testimonial
                                </Button>
                            </Grid>
                        </Grid>

                        <Box pt={2} pb={2}>
                            <Grid container={true} spacing={3}>
                                {testimonials.map((testimonial, index) => {
                                    return (
                                        <Grid key={index} item={true} xs={12} md={4}>
                                            <Testimonial testimonial={testimonial}/>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Box>
                    </Container>
                </Box>
                {
                    testimonialDialogOpen && (
                        <AddTestimonialDialog
                            open={testimonialDialogOpen}
                            handleClose={() => setTestimonialDialogOpen(false)}
                        />
                    )
                }
            </Box>
        </Layout>
    )
}

export default TestimonialsPage;
