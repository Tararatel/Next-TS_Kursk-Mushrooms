import type { NextPage } from 'next';
import { Banner, Header, List, MapComp, P } from '../components';

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<Banner />
			<List />
			<MapComp />
		</>
	);
};

export default Home;
