import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryclient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryclient}>
			<ChakraProvider>
				<Component {...pageProps} />
			</ChakraProvider>
		</QueryClientProvider>
	);
}
export default MyApp;
