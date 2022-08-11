import type { NextPage } from 'next';
import { Banner, Card, Header, List, MapComp, P } from '../components';

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<Banner />
			<P size="large" align="center">
				Съедобные грибы
			</P>
			<List />
			<MapComp />
		</>
	);
};

export default Home;
