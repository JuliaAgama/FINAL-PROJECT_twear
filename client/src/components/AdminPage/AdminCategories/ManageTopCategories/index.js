import React from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import TopCatItem from './TopCatItem';

const useStyles = makeStyles((theme) => {

    return ({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        center: {
            textAlign: 'center',
            margin: '0 auto'
        },
        fab: {
            margin: theme.spacing(1),
            textAlign: 'center',
        },
        extendedIcon: {
            marginRight: theme.spacing(1),
        },
    });
});


export default props => {

    const classes = useStyles();

    const items = [
        {
            _id: "5dc075c91c9d4400005a4e9b",
            title: "footwear",
            img: "https://pmcfootwearnews.files.wordpress.com/2018/03/heels.jpg?w=700&h=437&crop=1"
        },
        {
            _id: "5dc075d81c9d4400005a4e9d",
            title: "clothes",
            img: "http://www.asiaone.com/sites/default/files/original_images/May2019/110419_clothes_pixabay.jpg"
        },
        {
            _id: "5dc0766c1c9d4400005a4ea1",
            title: "accessories",
            img: "https://www.brighton.com/photos/product/giant/369560S196912/-/size-os.jpg"
        },
    ];

    return (
        <List className={classes.root}>
            {items
                    .map(item =>
                        <TopCatItem
                            item={item}
                            key={item._id}
                        />
                    )
            }
            <Divider />
            <ListItem>
                <Link href="/admin/categories/newTopCategory" className={classes.center}>
                    <Fab variant="extended" aria-label="add" color="secondary" className={classes.fab}>
                        <AddIcon className={classes.extendedIcon} aria-label="add"></AddIcon>
                        <span> CREATE NEW TOP CATEGORY </span>
                    </Fab>
                </Link>
            </ListItem>
        </List>
    )
};



            // <Link href={`/admin`}>
            //     <Button className="btn btn-lg btn-block btn-secondary text-uppercase">Back
            //     </Button>
            // </Link>