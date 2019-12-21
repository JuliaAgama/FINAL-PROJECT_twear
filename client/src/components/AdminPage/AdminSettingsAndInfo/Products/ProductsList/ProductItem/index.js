import React, {useEffect, useState} from 'react';
import { Typography, Box, Grid, ListItem, Divider, Hidden} from '@material-ui/core';
import useStyles from './useStyles';
import Checkbox from "@material-ui/core/Checkbox";



export default props => {

    const {item} = props;
    const [checked, setChecked] = useState(false);
    const handleChange = event => {
        setChecked(event.target.checked);
    };
    const cutName = (string, l) => string.length > l ? string.slice(0, l-3)+'...' : string;

    useEffect(() => {
        let data = localStorage.getItem('checkedProduct');
            if (data) {
                data = JSON.parse(data);
                // const checkedEl = data.find(el => el.itemID === item._id);
                // if (checkedEl) {
                //     data.splice( data.indexOf(checkedEl), 1 );
                // } else if (data.length < 4) {
                //
                // }
                data.push({itemID: item._id, checked: checked})
            } else {
                const checkedProduct = [];
                checkedProduct.push({itemID: item._id, checked: checked});
                localStorage.setItem('checkedProduct', JSON.stringify(checkedProduct));
            }
    });

    // useEffect(() => {
    //    let data = localStorage.getItem('checkedProduct');
    //    if (data) {
    //        data = JSON.parse(data);
    //        const checkedElement = data.find(el => el.itemID === item._id);
    //        if (checkedElement) setChecked(checkedElement.checked)
    //    }
    // });

    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} lg={4}>
            <Divider />
            <ListItem>
                <Grid container className={classes.paper}>
                    <Grid item container>
                        <Grid item>
                            <Box className={classes.image}>
                                <img src={item.imgs[0]} className={classes.img} alt="Not Found"/>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Hidden mdUp>
                                <Typography variant="body2" className={classes.title}>{cutName(item.name, 22)}</Typography>
                            </Hidden>
                            <Hidden smDown >
                                <Typography variant="body2" className={classes.title}>{cutName(item.name, 24)}</Typography>
                            </Hidden>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography component="div" variant="body2" >
                            <Box fontStyle="italic" fontSize={14} fontWeight="light" className={classes.art}>{item.itemNo}</Box>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    </Grid>
                </Grid>
            </ListItem>
        </Grid>
    )
};
