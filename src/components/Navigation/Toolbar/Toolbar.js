import React from 'react';

import Logo from '../../Logo/Logo';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Toggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Toggle openSideDrawer={props.openSideDrawer}>Menu</Toggle>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
           <NavigationItems />
        </nav>
    </header>
);

export default toolbar;