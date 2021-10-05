import React from 'react';
import { Box, Text, UnorderedList, ListItem } from '@chakra-ui/react';
export const ListYears = () => {
	const yearsData = ['2018', '2019', '2020', '2021'];
	return (
		<Box bg="gray.100" rounded="lg" alignItems="center" p="5" mt="2">
			<Text fontSize="xl" fontWeight="bold">
				Years
			</Text>
			<Box>
				<UnorderedList listStyleType="none" mt="2">
					{yearsData.map((year, idx) => {
						return (
							<ListItem
								key={idx}
								cursor="pointer"
								px="10px"
								py="2"
								_hover={{
									bg: 'gray.200',
								}}
							>
								{year}
							</ListItem>
						);
					})}
				</UnorderedList>
			</Box>
		</Box>
	);
};
