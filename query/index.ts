import { useQuery } from 'react-query';
import axios from 'axios';
import { MovieProps } from '../interface';

const httpClient = axios.create({
	baseURL: 'http://www.omdbapi.com/',
});

export interface MovieData {
	Response: string;
	Search: MovieProps[];
	totalResults: StaticRangeInit;
}

const apikey = '876d595';

export const useMovieListQuery = (page: string, title: string) =>
	useQuery(['movie-list', page, title], async () => {
		const axiosResponse = await httpClient.get<MovieData>(
			`?s=${title}&page=${page}&apikey=${apikey}`
		);
		return axiosResponse.data;
	});
