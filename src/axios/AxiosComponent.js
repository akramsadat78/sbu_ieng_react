import React from 'react';
import axios from 'axios';
import UserComponent from '../user/UserComponent';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return ( <
        div className = { classes.root } >
        <
        CssBaseline / >
        <
        AppBar position = "fixed"
        className = {
            clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })
        } >
        <
        Toolbar >
        <
        IconButton color = "inherit"
        onClick = { handleDrawerOpen }
        edge = "start"
        className = {
            clsx(classes.menuButton, {
                [classes.hide]: open,
            })
        } >
        <
        MenuIcon / >
        <
        /IconButton> <
        Typography variant = "h4"
        noWrap >
        home page <
        /Typography> <
        /Toolbar> <
        /AppBar>

        <
        main className = { classes.content } >
        <
        div className = { classes.toolbar }
        /> <
        /main> <
        /div>
    );
}

export default class AxiosComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:3001/")
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data.items,
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {

        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div > Error: { error.message } < /div>;
        } else if (!isLoaded) {
            return <div > Loading... < /div>;
        } else {
            return ( <
                Router >
                <
                MiniDrawer / >
                <
                div >
                <
                nav >
                <
                ul > {
                    items.map(item => ( <
                        li key = { item.title } >
                        <
                        Link to = '/user' > { item.title } < /Link> <
                        /li>
                    ))
                } <
                /ul> <
                /nav>

                <
                Route path = '/user' >
                <
                UserComponent / >
                <
                /Route> <
                /div> <
                /Router>

            );
        }
    }
}