import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import useStyles from '../../useStyles';
import { borders } from '@material-ui/system';
import ProductCard from "../../../common/ProductCard";

const ProductsSection = () => {

	const classes = useStyles();
	
	return(
		<Container maxWidth={false} className={classes.sectionContainer}>
			<Typography align='center' gutterBottom={true} variant="h3">Selected New Arrivals</Typography>
			<Grid container spacing={0} className={classes.sectionGrid}>
				<Grid item xs={3}>
					<Box border={1} borderRight={0}>
						asdasdasd
					</Box>
				</Grid>
				<Grid item xs={3}>
					<Box border={1} borderRight={0}>
						asdasdasd
					</Box>
				</Grid>
				<Grid item xs={3}>
					<Box border={1} borderRight={0}>
						asdasdasd
					</Box>
				</Grid>
				<Grid item xs={3}>
					<Box border={1}>
						asdasdasd
					</Box>
				</Grid>
			</Grid>
		</Container>
	)
}

export default ProductsSection