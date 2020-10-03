import React, { useState } from 'react'
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Cart from './Cart';


const drawerWidth = 400;
const useStyles = makeStyles((theme) => ({
    cartTitle: {
        marginLeft: 10
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
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
        ...theme.mixins.toolbar,
        justifyContent: 'space-between',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
    title: {
        marginRight:30,
        cursor: 'pointer'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
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
    const [searchText, setSearchTextInput] = useState('');
    // const dispatch = useDispatch();
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

    const handleSearchChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setSearchTextInput(value);
        // dispatch(setSearchText(value));
        props.history.push({
            pathname: '/',
        });

    }

    const quantityItems = Object.values(cartItem.items).reduce((sum, item) => { return sum + parseInt(item.quantity) }, 0);

    return (
        <>
            <AppBar position="static">
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
                        Cart
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