import React, { useState } from 'react'
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Cart from './Cart';
import { red } from '@material-ui/core/colors';


const drawerWidth = 400;
const useStyles = makeStyles((theme) => ({

    cartTitle: {
        marginLeft: 10
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        offset : theme.mixins.toolbar,
        justifyContent: 'space-between',
    },
    title: {
        marginRight:30,
        cursor: 'pointer'
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

const NavBar = props => {
    const classes = useStyles();
    const cartItem = useSelector(state => state.cartReducer);
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleGoHome = (event) => {
        event.preventDefault();
        props.history.push({
            pathname: '/',
        });
    }
    const handleGoAdmin = (event) => {
        event.preventDefault();
        props.history.push({
            pathname: '/admin',
        });
    }
    const handleGoAbout = (event) => {
        event.preventDefault();
        props.history.push({
            pathname: '/about',
        });
    }

    const quantityItems = Object.values(cartItem.items).reduce((sum, item) => { return sum + parseInt(item.quantity) }, 0);

    return (
        <>
            <AppBar position="static" className={classes.navBar}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        className={classes.title}
                        onClick={event => handleGoHome(event)}>
                        DITAGIS
                    </Typography>
                    <Typography
                        variant="h6"
                        className={classes.title}
                        onClick={event => handleGoAdmin(event)}>
                        Admin
                    </Typography>
                     <Typography
                        variant="h6"
                        className={classes.title}
                        onClick={event => handleGoAbout(event)}>
                        About Website
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            color="inherit"
                            edge="end"
                            onClick={handleDrawerOpen}
                            className={clsx(open && classes.hide)}>
                            <Badge badgeContent={quantityItems} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <div className={classes.drawerHeader}>
                    <IconButton
                        color="inherit">
                        <ShoppingCartIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.cartTitle}>
                        Giỏ hàng
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <Cart />
            </Drawer>
        </>
    );
}

export default withRouter(NavBar);