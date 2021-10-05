import React from 'react';
import { Box, Text, Image, Heading, Stack } from '@chakra-ui/react';
import { MovieProps } from '../../interface';
interface MovieCardProps extends MovieProps {
	clickMovie: () => void;
}

export const MovieCard: React.FC<MovieCardProps> = (props) => {
	return (
		<Box cursor="pointer" onClick={props.clickMovie}>
			<Image
				src={props?.Poster ?? ''}
				alt="title"
				objectFit="cover"
				shadow="lg"
				rounded="lg"
				w="20rem"
				h="25rem"
			/>
			<Stack spacing="0" p="2" color="white">
				<Text size="md" fontSize="xl" noOfLines={1} color="gray.600">
					{props?.Title ?? ''}
				</Text>
				<Text color="gray.400" textTransform="capitalize">
					{props?.Type ?? ''}
				</Text>
			</Stack>
		</Box>
	);
};
