import type { NextPage } from 'next';
import { Banner, Footer, Header, List, MapComp, P, Up } from '../components';

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
			<Footer />
			<Up />
		</>
	);
};

export default Home;
