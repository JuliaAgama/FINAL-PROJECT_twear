import React from 'react';

import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import useStyles from './useStyles';

import AddWideButton from '../../../common/buttons/AddWide';
import TopCatItem from './TopCatItem';


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
        {
            _id: "5dc480ec1c9d440000cdd6b2",
            title: "looks",
            img: "https://www.jacketsociety.com/wp-content/uploads/2018/11/Fall-Fashion-In-Black-And-Ivory-Textures-Featured.jpg"
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
                    <AddWideButton text='CREATE NEW TOP CATEGORY'/>
                </Link>
            </ListItem>
        </List>
    )
};
