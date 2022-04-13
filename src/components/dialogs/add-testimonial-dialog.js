import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Dialog,
    DialogContent,
    Grid, LinearProgress,
    Rating,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import {TESTIMONIAL_ACTION_CREATORS} from "../../redux/testimonials/testimonial-action-creators";
import {useDispatch, useSelector} from "react-redux";
import {selectTestimonials} from "../../redux/testimonials/testimonial-reducer";

const AddTestimonialDialog = ({open, handleClose}) => {

    const [testimonial, setTestimonial] = useState({
        rating: 5, firstName: '', lastName: '', review: ''
    });
    const [error, setError] = useState({});
    const {firstName, lastName, review, rating} = testimonial;

    const handleTestimonialChange = event => {
        setTestimonial({...testimonial, [event.target.name]: event.target.value});
    }

    const handleRatingChange = (event, rating) => {
        setTestimonial({...testimonial, rating});
    }

    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();

        if (!firstName) {
            setError({error, firstName: 'First name required'});
            return;
        } else {
            setError({error, firstName: null});
        }

        if (!lastName) {
            setError({error, lastName: 'Last name required'});
            return;
        } else {
            setError({error, lastName: null});
        }

        if (rating < 0) {
            setError({error, rating: 'Invalid rating'});
            return;
        } else {
            setError({error, rating: null});
        }

        if (!review) {
            setError({error, review: 'Review required'});
            return;
        } else {
            setError({error, review: null});
        }

        dispatch(TESTIMONIAL_ACTION_CREATORS.createTestimonial(testimonial, handleClose));
    }

    const {testimonialLoading, testimonialError} = useSelector(selectTestimonials);

    return (
        <Dialog open={open} onClose={handleClose}>
            {testimonialLoading && <LinearProgress color="success" variant="query"/>}
            <DialogContent>
                {
                    testimonialError && (
                        <Alert variant="standard" elevation={0} severity="error">
                            <AlertTitle>{testimonialError}</AlertTitle>
                        </Alert>
                    )
                }
                <Typography align="center" mb={2} variant="h5">Submit Testimonial</Typography>
                {
                    error.rating && (
                        <Alert severity="error">
                            <AlertTitle>Rating Error</AlertTitle>
                            <Typography variant="h6" align="center">{error.rating}</Typography>
                        </Alert>
                    )
                }

                <form onSubmit={handleSubmit}>
                    <Stack direction="column" spacing={0}>
                        <TextField
                            required={true}
                            onChange={handleTestimonialChange}
                            value={firstName}
                            label="First Name"
                            fullWidth={true}
                            variant="outlined"
                            placeholder="Enter first name"
                            name="firstName"
                            error={Boolean(error.firstName)}
                            helperText={error.firstName}
                            type="text"
                            size="medium"
                            margin="dense"
                        />

                        <TextField
                            required={true}
                            onChange={handleTestimonialChange}
                            value={lastName}
                            label="Last Name"
                            fullWidth={true}
                            variant="outlined"
                            placeholder="Enter last name"
                            name="lastName"
                            error={Boolean(error.lastName)}
                            helperText={error.lastName}
                            type="text"
                            size="medium"
                            margin="dense"
                        />

                        <Box>
                            <Typography variant="body2">Rating</Typography>
                            <Rating
                                value={rating}
                                name="rating"
                                onChange={handleRatingChange}
                                size="large"
                                precision={0.5}/>
                        </Box>

                        <TextField
                            required={true}
                            onChange={handleTestimonialChange}
                            value={review}
                            label="Review"
                            fullWidth={true}
                            variant="outlined"
                            placeholder="Enter Review"
                            name="review"
                            error={Boolean(error.review)}
                            helperText={error.review}
                            type="text"
                            multiline={true}
                            minRows={4}
                            size="medium"
                            margin="dense"
                        />
                    </Stack>
                    <Grid container={true} spacing={2} sx={{mt: 2}}>
                        <Grid item={true} xs={12}>
                            <Button
                                onClick={handleSubmit}
                                type="submit"
                                variant="contained"
                                disableElevation={true}
                                fullWidth={true}
                                size="large"
                                sx={{borderWidth: 2, color: 'secondary.main'}}>
                                Submit Review
                            </Button>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Button
                                onClick={handleClose}
                                variant="outlined"
                                fullWidth={true}
                                size="large"
                                sx={{borderWidth: 2, color: 'secondary.main'}}>
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>

                </form>
            </DialogContent>
        </Dialog>
    )
}

export default AddTestimonialDialog;
