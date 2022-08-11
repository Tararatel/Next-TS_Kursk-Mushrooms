import type { NextPage } from 'next';
import { Banner, Card, Header, List, MapComp } from '../components';

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
