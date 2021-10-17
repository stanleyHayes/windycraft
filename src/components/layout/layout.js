import React from "react";
import Header from "../headers/header";
import Footer from "../footer/footer";
import {makeStyles} from "@mui/styles";
import {SwipeableDrawer} from "@mui/material";
import DrawerContent from "../drawer-content/drawer-content";
import {useDispatch, useSelector} from "react-redux";
import {UI_ACTION_CREATORS} from "../../redux/ui/ui-action-creators";
import {selectUI} from "../../redux/ui/ui-reducer";

const Layout = ({children}) => {

    const useStyles = makeStyles(theme => {
        return {
            content: {
                paddingTop: 92,
                flex: 1,
                paddingBottom: 32,
            },
            header: {

            },
            root: {
                maxWidth: '100vw',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh'
            }
        }
    });

    const classes = useStyles();
    const dispatch = useDispatch();
    const {isToggled} = useSelector(selectUI);

    return (
        <div className={classes.root}>
            <div>
                <Header />
            </div>
            <div className={classes.content}>
                {children}
            </div>
            <Footer />
            <SwipeableDrawer
                open={isToggled}
                onOpen={() => dispatch(UI_ACTION_CREATORS.openSidebar())}
                onClose={() => dispatch(UI_ACTION_CREATORS.closeSidebar())}>
                <DrawerContent />
            </SwipeableDrawer>
        </div>
    )
}

export default Layout;
