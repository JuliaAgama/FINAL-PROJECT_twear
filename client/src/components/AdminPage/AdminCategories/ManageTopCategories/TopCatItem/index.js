import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import useStyles from './useStyles';

import ManageCategories from '../../ManageCategories';
import ImgIcon from '../../../../common/images/ImgIcon';
import OpenEditButton from '../../../../common/buttons/Edit';
import DeleteButton from '../../../../common/buttons/Delete';

import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';


export default props => {
    const classes = useStyles();

    const {item} = props;

    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const onDelete = () => {
        console.log('BETTER NOT DELETE TOP CATEGORY!!!!')
    };

    return (
        <>
            <Divider />
            <ListItem>
                <Grid container className={classes.paper}>
                    <Grid item xs={6}>
                        <Grid container className={classes.paper}>
                            <Grid item xs={4} >
                                <ImgIcon src={item.img}/>
                            </Grid>
                            <Grid item xs={7}> {item.name} </Grid>
                            <Grid item xs={1}>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    color="secondary"
                                    aria-label="expandDown"
                                    >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={1}>
                        <Link href={"/admin/categories/"+item.name}>
                            <OpenEditButton/>
                        </Link>
                    </Grid>
                    <Grid item xs={1}>
                        <DeleteButton onDelete={onDelete}/>
                    </Grid>
                </Grid>
            </ListItem>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <div className={classes.expanded}>
                    <ManageCategories topCatId={item._id}/>
                    <Box textAlign='right'>
                        <IconButton
                            className={classes.expandOpen}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            color="secondary"
                            aria-label="expandDown"
                            >
                            <ExpandMoreIcon />
                        </IconButton>
                    </Box>
                </div>
            </Collapse>
        </>
    )
};
