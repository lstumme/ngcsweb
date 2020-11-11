import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import {
    AppBar, IconButton, Toolbar, withStyles, Drawer,
    Typography, List, ListItem, ListItemIcon, ListItemText,
    Divider, Hidden, withTheme, CssBaseline
} from '@material-ui/core';
import {
    Menu as MenuIcon,
    Mail as MailIcon,
    MoveToInbox as InboxIcon,

} from '@material-ui/icons';
import clsx from 'clsx';
import routes from '../routes';

const basePath = '/ngcs';
const drawerWidth = 240;

const customtheme = createMuiTheme({
    palette: {
        divider: '#ffffff'
    },
    overrides: {
        MuiAppBar: {
            colorDefault: {
                color: '#fff',
                backgroundColor: '#000',
            }
        },
        MuiIconButton: {
            root: {
                color: '#fff',
            }
        },
        MuiSvgIcon: {
            root: {
                fill: '#fff',
            }
        }
    }
});

const styles = theme => ({
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
        paper: {
            background: "blue"
        }
    },
    drawerPaper: {
        background: theme.palette.primary.main
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
    divider: {
        // Theme Color, or use css color in quote
        background: "#fff",
    },
});

class MainLayout extends Component {
    state = {
        open: false,
        mobileOpen: false
    }
    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };
    render() {
        const { classes, theme, window } = this.props;
        const container = window !== undefined ? () => window().document.body : undefined;
        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <Divider style={{ color: "#fff" }}/>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon style={{ color: "#fff" }}/> : <MailIcon style={{ color: "#fff" }}/>}</ListItemIcon>
                            <ListItemText primary={text} style={{ color: "#fff" }}/>
                        </ListItem>
                    ))}
                </List>
                <Divider classes={{root: classes.divider}}/>
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon style={{ color: "#fff" }}/> : <MailIcon style={{ color: "#fff" }}/>}</ListItemIcon>
                            <ListItemText primary={text} style={{ color: "#fff" }}/>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar} elevation="0">
                    <Toolbar variant="dense">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={this.handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Responsive drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant="temporary"
                            anchor="left"
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                        gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                        donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                        imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                        arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                        donec massa sapien faucibus et molestie ac.
              </Typography>
                    <Typography paragraph>
                        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                        facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                        tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                        consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                        hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                        tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                        nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                        accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
              </Typography>
                </main>
            </div>
        );
    }
};

export default withStyles(styles)(withTheme(MainLayout));