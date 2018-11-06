import React, {Component} from 'react';

import Aux from '../../hoc/Auxilliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
    
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerOpenHandler = () => {
        this.setState({showSideDrawer: true});
    }

    sideDrawerToggleHandler = (prevState) => {
        this.setState( (prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer};
        });
    }
    render() {
        return (
        <Aux>
            <Toolbar openSideDrawer={this.sideDrawerToggleHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerToggleHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        );
    }
}

export default Layout;