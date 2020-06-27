import React from 'react';
import {Grid} from '@material-ui/core';
import landSCList from './Cards.json';
import LandSCard from './LandSCard';

const Content = () => {
	const landSCCard = (lansCardObj) => {
		return (
			<Grid item xs={6} sm={4}>
				<LandSCard {...lansCardObj} />
			</Grid>
		);
	};
	return (
		<Grid container spacing={3} style={{padding: 30}}>
			{landSCList.map((lansCardObj) => landSCCard(lansCardObj))}
		</Grid>
	);
};

export default Content;
