import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from '../../useStyles';
import Base from '../../../../services/base';
import * as products from '../../../../store/actions/products';
import Product from "../../../../services/Products";


const PhotoCard = (props) => {

	const classes = useStyles();

	const dispatch = useDispatch();
    useEffect(() => {
        products.getAllProducts()(dispatch);
    }, [dispatch]);

	const productsList = useSelector(state => state.products.products);
	const productsListLoaded = useSelector(state => state.products.loaded);

	let current = productsList.filter(obj => {
		return obj.name === (props.item)
	})[0];

	let getImgUrl = function(){
		if (productsListLoaded) {
			return current.imgs[0]
		}
	}
	
	let buttonHref = function(){
		if (productsListLoaded) {
			return /products/ + current._id
		}
	}
	console.log(buttonHref())

	return(

		<Card className={classes.photoCard}>
			<CardContent className={classes.photoCardImage}>
				<img src={getImgUrl()} className={classes.cardContentImg} />
			</CardContent>
			<CardActions>
				<div className={classes.photoCardCaption}>
					<Button href={buttonHref()} className={classes.photoCardCaptionButton}>Jump to {props.item}</Button>
				</div>
			</CardActions>
		</Card>
	)

}

export default PhotoCard