import React from 'react';
import PhotoCardCaption from "././PhotoCardCaption";
import PhotoCardImage from "././PhotoCardImage"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from '../../../useStyles';

const PhotoCard = (props) => {

	const classes = useStyles();

	return(
		<Card className={classes.photoCard}>
			<CardContent className={classes.photoCardImage}>
				<PhotoCardImage />
			</CardContent>
			<CardActions>
				<PhotoCardCaption/>
			</CardActions>
		</Card>
	)

}

export default PhotoCard