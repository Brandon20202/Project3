import React from 'react';
import LCCard from './LCCard';
import {Grid} from '@material-ui/core';
import landSCList from './Cards.json';
import LandSCard from './LandSCard';

const Content = () => {
	const landSCCard = (lansCardObj) => {
		return (
			<Grid item xs={12} sm={4}>
				<LCCard {...lansCardObj} />
			</Grid>
		);
	};
	return (
		<Grid container spacing={4}>
			{landSCList.map((lansCardObj) => landSCCard(lansCardObj))}
		</Grid>
	);
};

export default Content;
