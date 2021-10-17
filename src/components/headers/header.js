import React from "react";
import {AppBar, Hidden} from "@mui/material";
import TabletTopBar from "./top-bar/tablet-top-bar";
import TabletHeader from "./nav-bar/tablet-header";
import DesktopTopBar from "./top-bar/desktop-top-bar";
import DesktopHeader from "./nav-bar/desktop-header";
import MobileTopBar from "./top-bar/mobile-top-bar";
import MobileHeader from "./nav-bar/mobile-header";

const Header = () => {

    return (
        <AppBar variant="elevation" elevation={0} color="primary">
            <Hidden mdDown={true}>
                <DesktopTopBar/>
                <DesktopHeader />
            </Hidden>
            <Hidden mdUp={true}>
                <MobileTopBar/>
                <MobileHeader />
            </Hidden>
            <Hidden only={['xs', 'sm', 'lg', 'xl']}>
                <TabletTopBar/>
                <TabletHeader />
            </Hidden>
        </AppBar>
    )
}

export default Header;
