import { Header, MapComp, P } from '../../components';
import { Edible } from '../../data/EdibleMushrooms/Edible';
import { InEdible } from '../../data/InedibleMushrooms/InEdible';
import { NextRouter, useRouter } from 'next/router';
import styles from './Description.module.scss';
import { DescriptionProps } from './Description.props';

const EdiblePaths = ({ className, edibleData, ...props }: DescriptionProps): JSX.Element => {
	const router: NextRouter = useRouter();
	const { id } = router.query;

	return (
		<>
			<Header />
			{Edible.filter((mushroom) => mushroom.pathName === id).map((mushroom) => (
				<section className={styles.description} key={mushroom.id}>
					{mushroom.title}
				</section>
			))}

			{InEdible.filter((mushroom) => mushroom.pathName === id).map((mushroom) => (
				<section className={styles.description} key={mushroom.id}>
					{mushroom.title}
				</section>
			))}
		</>
	);
};

export default EdiblePaths;
