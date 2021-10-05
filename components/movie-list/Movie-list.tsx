import React from 'react';
import { Box, Text, Wrap, WrapItem, WrapProps } from '@chakra-ui/react';
import { MovieCard } from '.';
import { MovieProps } from '../../interface';

interface MovieListProps extends WrapProps {
	movies: MovieProps[];
}
export const MovieList: React.FC<MovieListProps> = (props) => {
	const handleClickMovie = () => {
		alert(props.movies[0].imdbID);
	};
	return (
		<Wrap {...props}>
			{props.movies.map((movie, idx) => {
				return (
					<WrapItem key={idx} w="24%" p="2">
						<MovieCard
							clickMovie={handleClickMovie}
							Title={movie.Title}
							Type={movie.Type}
							Poster={movie.Poster}
						/>
					</WrapItem>
				);
			})}
		</Wrap>
	);
};
