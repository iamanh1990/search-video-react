import React, { useState } from 'react';

const SearchBar = ({ onTermSubmit }) => {
	const [ term, setTerm ] = useState('');

	const onInputChange = (e) => {
		setTerm(e.target.value);
	};

	const onFormSubmit = (e) => {
		e.preventDefault();

		onTermSubmit(term);
	};

	return (
		<div className="ui segment search-bar">
			<form className="ui form" onSubmit={onFormSubmit}>
				<div className="field">
					<label>Search For A Video</label>
					<input //
						type="text"
						value={term}
						onChange={onInputChange}
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
