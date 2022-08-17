import type { NextPage } from 'next';
import { Banner, Header, List, MapComp, P } from '../components';

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<Banner />
			<List />
			<P size="large" align="center">
				Грибы на карте
			</P>
			<MapComp />
		</>
	);
};

export default Home;
