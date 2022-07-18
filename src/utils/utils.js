const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 10536, min: 1299 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 1200, min: 900 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 900, min: 600 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1
    }
};

export const UTILS = {responsive};
