import React from 'react';
import { Stack, Avatar, Text } from '@chakra-ui/react';
export const Profile = () => {
	return (
		<Stack
			direction="row"
			bg="gray.200"
			rounded="lg"
			alignItems="center"
			p="5"
		>
			<Avatar src="https://www.kindpng.com/picc/m/136-1369892_avatar-people-person-business-user-man-character-avatar.png" />
			<Text fontWeight="bold" fontSize="large">
				H Maimun
			</Text>
		</Stack>
	);
};
