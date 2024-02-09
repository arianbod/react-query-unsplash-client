import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
const searchIdea = 'dollar';
const url = `https://api.unsplash.com/search/photos?query=${searchidea}&client_id=OLIAyHh-WZVqkJM4o9YndtjyUvr9UgT7UcKUAOYukp0`;
const Gallery = () => {
	const response = useQuery({
		queryKey: ['images'],
		queryFn: async () => {
			const result = await axios.get(url);
			return result.data;
		},
	});
	if (response.isLoading) {
		return (
			<section className='image-container'>
				<h4>Loading ...</h4>
			</section>
		);
	}
	if (response.isError) {
		return (
			<section className='image-container'>
				<h4>Error ...</h4>
			</section>
		);
	}
	const results = response.data.results;
	if (results.length < 1) {
		<section className='image-container'>
			<h4>No result found ...</h4>
		</section>;
	}
	return (
		<section className='image-container'>
			{results.map((item) => {
				const {} = item;
				const url = item?.urls?.regular;
				return (
					<img
						src={url}
						key={url}
						className='img'
					/>
				);
			})}
		</section>
	);
};

export default Gallery;
