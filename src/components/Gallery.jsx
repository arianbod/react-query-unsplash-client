import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useGlobalContext } from './context';

const searchIdea = 'dollar';
const Gallery = () => {
	const { searchTerm, setSearchTerm } = useGlobalContext();
	const url = `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${
		import.meta.env.VITE_API_KEY
	}`;
	const response = useQuery({
		queryKey: ['images', searchTerm],
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
