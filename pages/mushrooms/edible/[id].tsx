import type { GetStaticPaths } from 'next';
import { Banner, Header, List, MapComp, P } from '../../../components';
import { Edible } from '../../../data/EdibleMushrooms/Edible';
import { NextRouter, useRouter } from 'next/router';

export const EdiblePaths = (): JSX.Element => {
	const router: NextRouter = useRouter();
	const { id }: string | string[] | undefined = router.query;
	console.log(id);

	return (
		<>
			<Header />
			Id number {id}
			Кабзда сколько сюда можно инфы насувать О_____О
		</>
	);
};

export default EdiblePaths;
