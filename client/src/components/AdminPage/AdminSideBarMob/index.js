import React, { useState } from 'react';

import { Typography, Box, List, ListItem, ListItemText, Link, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from './useStyles';


export default props => {

    const {items} = props;

    const [isOpen, setIsOpen] = useState(false);

    const onToggle = () => setIsOpen(!isOpen);

    const classes = useStyles();


    return (
        <Typography component="div" variant="body1">
            <Box
                className={classes.btn}
                position="fixed"
                zIndex="tooltip"
            >
                {isOpen ? <CloseIcon onClick={onToggle}/> : <MenuIcon onClick={onToggle}/>}
            </Box>
                {isOpen ?
                (
                    <Box border={1} textAlign="center" paddingBottom={1} position="fixed" top={1} left={1} zIndex="modal" className={classes.root}>
                        <List component="nav" aria-label="admin-drop-down-menu">
                            {items.map((el, ind) => (
                                <ListItem button onClick={onToggle} key={ind}>
                                    <Link href={`/admin/${el.url}`} className={classes.link}>
                                        <ListItemText primary={`Manage ${el.name}`} />
                                    </Link>
                                </ListItem>
                            ))}
                            <Divider/>
                        </List>
                        <p>Go to <a href="/">shop</a>.</p>
                    </Box>
                ) : <></>
            }
        </Typography>
    )
};
