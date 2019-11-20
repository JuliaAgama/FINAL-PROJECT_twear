import React from 'react';
import Grid from "@material-ui/core/Grid";
import PhotoCard from "././PhotoCard"
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import useStyles from '../../useStyles';

const PhotosSection = () => {

	const classes = useStyles();
	
	return(
		<Container maxWidth={false} className={classes.sectionContainer}>
			<Typography align='center' gutterBottom={true} variant="h2">Pre Spring 20</Typography>
			<Typography align='center' variant="body1" >Get ready for the festive season with our Pre Party collection — First arrivals are now online.</Typography>
			<Grid container spacing={0} className={classes.sectionGrid}>
				<Grid item xs={3}>
					<PhotoCard />
				</Grid>
				<Grid item xs={3}>
					<PhotoCard />
				</Grid>
				<Grid item xs={3}>
					<PhotoCard />
				</Grid>
				<Grid item xs={3}>
					<PhotoCard />
				</Grid>
			</Grid>
		</Container>
	)
}

export default PhotosSection