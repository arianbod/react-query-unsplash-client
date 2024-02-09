import React, { useState } from 'react';

const SearchForm = () => {
	const [searchValue, setSearchValue] = useState('');
	const handleSearchChange = (e) => setSearchValue(e.target.value);
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(searchValue);
	};
	return (
		<section>
			<h1 className='title'>Unsplash Images</h1>
			<form
				onSubmit={handleSubmit}
				className='search-form'>
				<input
					type='text'
					name='search'
					value={searchValue}
					className='form-input search-input'
					onChange={handleSearchChange}
					placeholder='cat'
				/>
				<button
					className='btn'
					type='submit'>
					search
				</button>
			</form>
		</section>
	);
};

export default SearchForm;
