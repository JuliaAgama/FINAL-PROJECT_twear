import React from 'react';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import useStyles from './useStyles';

import ImgIcon from '../../../../common/images/ImgIcon';
import OpenEditButton from '../../../../common/buttons/Edit';
import DeleteButton from '../../../../common/buttons/Delete';


export default props => {

    const classes = useStyles();

    const {item} = props;

    const onDelete = () => {
        console.log('BETTER NOT DELETE CATEGORY!!!!')
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
                        <Grid item xs={1}></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1}></Grid>
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
        </>
    )
};
