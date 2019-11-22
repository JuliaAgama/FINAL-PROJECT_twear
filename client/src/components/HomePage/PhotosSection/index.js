import React from 'react';
import Grid from "@material-ui/core/Grid";
import PhotoCard from "././PhotoCard"
import Hidden from '@material-ui/core/Hidden';

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import useStyles from '../useStyles';

const PhotosSection = () => {

	const classes = useStyles();
	
	return(
		<Container maxWidth={false} className={classes.sectionContainer}>
			<Typography align='center' gutterBottom={true} variant="h2">Pre Spring 20</Typography>
			<Typography align='center' variant="body1" >Get ready for the festive season with our Pre Party collection — First arrivals are now online.</Typography>
			<Grid container spacing={0} className={classes.sectionGrid}>
				<Grid item xs={6} md={3}>
					<PhotoCard item="yellow dress"/>
				</Grid>
				<Grid item xs={6} md={3}>
					<PhotoCard item="puffer jacket"/>
				</Grid>
				<Hidden smDown>
					<Grid item xs={false} md={3}>
						<PhotoCard item="hiking backpack"/>
					</Grid>
				</Hidden>
				<Hidden smDown>
					<Grid item xs={false} md={3}>
						<PhotoCard item="unisex trench coat"/>
					</Grid>
				</Hidden>
			</Grid>
		</Container>
	)
}

export default PhotosSection