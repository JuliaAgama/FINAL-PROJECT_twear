import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import useStyles from '../../../../useStyles';

const PhotoCardCaption = (props) => {

	const classes = useStyles();

	return(
		<div className={classes.photoCardCaption}>
				<Button href='/products' className={classes.photoCardCaptionButton}>Jump to product page</Button>
		</div>
	)

}

export default PhotoCardCaption