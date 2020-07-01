/* eslint-disable no-use-before-define */

import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
	box: {
		background: 'white',
		opacity: '0.6',
		fontWeight: '500',
		fontStyle: 'oblique',
		alignItems: 'center',
	},
});

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const CheckBoxOption = () => {
	const classes = useStyles();
	return (
		<Autocomplete
			multiple
			id="checkboxes-tags-demo"
			options={top100Films}
			disableCloseOnSelect
			getOptionLabel={(option) => option.title}
			renderOption={(option, {selected}) => (
				<React.Fragment>
					<Checkbox icon={icon} checkedIcon={checkedIcon} style={{marginRight: 8}} checked={selected} />
					{option.title}
				</React.Fragment>
			)}
			style={{width: 500}}
			renderInput={(params) => <TextField {...params} className={classes.box} variant="filled" label="Checkboxes" placeholder="Favorites" />}
		/>
	);
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [{title: 'ByWeekly/One Time'}, {title: 'Shrubs and trimming'}, {title: 'Same day Service/Every month'}, {title: 'Flower Bed Stone/Ground Cover/Pathways'}];

export default CheckBoxOption;
