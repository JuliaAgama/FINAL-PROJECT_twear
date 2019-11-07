import React, {useState, useEffect} from 'react';


import Grid from '@material-ui/core/Grid';

import Fab from '@material-ui/core/Fab';

// import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import ManageCategories from '../../ManageCategories';

const useStyles = makeStyles((theme) => {

    return ({
        root: {
            flexGrow: 1,
            alignItems: 'center',
            textTransform: 'capitalize',
            justifyContent: 'space-between',
            paddingRight: theme.spacing(5)
        },
        imageBox: {
            height: theme.spacing(10),
            overflow: 'hidden'
        },
        image: {
            width: '80%',
            objectFit: 'cover',
        },
        fab: {
            margin: theme.spacing(2),
            textAlign: 'center',
        },
        whiteText: {
            color: '#fff',
        }
    });
});

export default props => {

    const classes = useStyles();

    const {item} = props;

    let [className, setClassName] = useState('d-none');

    const toggleCategories =() => {
        className === 'd-none' ? setClassName('d-block') : setClassName('d-none');
    };

    const onDelete = () => {
        console.log('BETTER NOT DELETE TOP CATEGORY!!!!')
    };


    return (
        <>
        <Divider />
        <ListItem>
            <Grid container className={classes.root}>
                <Grid item xs={6} md={8}>
                    <Grid container className={classes.root}>
                        <Grid item xs={3}className={classes.imageBox}>
                            <img
                                className={classes.image}
                                src={item.img}
                                alt="NOT FOUND"
                            />
                        </Grid>
                        <Grid item xs={9}> {item.title} </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2} md={1}>
                    <Link href="/admin/categories/${item.title}">
                        <Fab
                            className={classes.fab}
                            color="primary"
                            aria-label="edit"
                        >
                            <EditIcon/>
                        </Fab>
                    </Link>
                </Grid>
                <Grid item xs={2} md={1}>
                    <Fab
                        className={classes.fab}
                        color="default"
                        aria-label="delete"
                        onClick={onDelete}
                    >
                        <DeleteIcon className={classes.whiteText}/>
                    </Fab>
                </Grid>
                <Grid item xs={2} md={1}>
                    <Fab
                        className={classes.fab}
                        color="secondary"
                        aria-label="Dive"
                        onClick={toggleCategories}
                    >
                        <ArrowDropDownCircleIcon />
                    </Fab>
                </Grid>
            </Grid>
        </ListItem>

            <div className={className}>
                <div className="bg-info ml-5">
                    <ManageCategories topCategoryId={item._id}/>
                    <button
                        className="btn btn-block btn-secondary text-uppercase"
                        onClick={()=> toggleCategories()}
                    >
                        Close
                    </button>
                </div>
            </div>
        </>
    )
};
