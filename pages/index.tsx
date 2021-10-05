import { Box, Text, Container, Grid, GridItem } from '@chakra-ui/react';
const Home = () => {
	return (
		<Grid templateColumns="repeat(12, 1fr)">
			<GridItem colSpan={4} p="5">
				user
			</GridItem>
			<GridItem colSpan={8} p="5">
				list-movie
			</GridItem>
		</Grid>
	);
};

export default Home;
