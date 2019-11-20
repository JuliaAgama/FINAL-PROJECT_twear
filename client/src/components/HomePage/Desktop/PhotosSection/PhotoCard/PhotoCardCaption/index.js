import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import useStyles from '../../../../useStyles';

const PhotoCardCaption = () => {

	const classes = useStyles();

	return(
		<div className={classes.photoCardCaption}>
			<Button href="/" className={classes.photoCardCaptionButton}>Jump to product page</Button>
		</div>
	)

}

export default PhotoCardCaption