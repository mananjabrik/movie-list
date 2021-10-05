import { Grid, GridItem, Input, Stack, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ListYears, MovieList, Profile } from '../components';
import { MovieData, useMovieListQuery } from '../query';
const Home = () => {
	const [search, setSearch] = useState('guardian');
	const { data } = useMovieListQuery('1', search);
	const [movies, setMovies] = useState<MovieData>();
	const [typ, setTyp] = useState('');
	const chgTyp = (e: any) => {
		setTyp(e.target.value);
	};
	useEffect(() => {
		if (data) {
			setMovies(data);
		}
	}, [data]);
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	function handleScroll() {
		if (window.innerHeight !== document.documentElement.offsetHeight)
			return console.log('Fetch more list items!');
	}
	return (
		<Grid templateColumns="repeat(12, 1fr)">
			<GridItem colSpan={2} py="5rem" px="1rem" bg="gray.300">
				<Profile />
				<ListYears />
			</GridItem>
			<GridItem colSpan={10} p="5rem" bg="gray.200">
				<Stack direction="row" px="3" my="5">
					<Input
						bg="white"
						placeholder="halo bosku"
						border="none"
						onChange={chgTyp}
					/>
					<Button onClick={() => setSearch(typ)}>Search</Button>
				</Stack>
				<MovieList movies={movies?.Search.slice(0, 5) ?? []} />
			</GridItem>
		</Grid>
	);
};

export default Home;
