import { Header, MapComp, P } from '../../components';
import { Edible } from '../../data/EdibleMushrooms/Edible';
import { InEdible } from '../../data/InedibleMushrooms/InEdible';
import { NextRouter, useRouter } from 'next/router';
import styles from './Description.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const EdiblePaths = (): JSX.Element => {
	const router: NextRouter = useRouter();
	const { id } = router.query;

	return (
		<>
			<Header />
			{Edible.filter((mushroom) => mushroom.pathName === id).map((mushroom) => (
				<section className={styles.description} key={mushroom.id}>
					<div className={styles.description__img}>
						<Image src={`${mushroom.img.src}`} width={640} height={480} objectFit="cover" alt="mushroom" />
					</div>
					<P className={styles.description__title} size="large" align="center">
						{mushroom.title}
					</P>
					<P className={styles.description__text} size="medium">
						{mushroom.cap}
					</P>
					<P className={styles.description__text} size="medium">
						{mushroom.stipe}
					</P>
					<P className={styles.description__text} size="medium">
						{mushroom.pulp}
					</P>
					<P className={styles.description__text} size="medium">
						{mushroom.tubular}
					</P>
					<P className={styles.description__source} size="verySmall" align="right">
						Источник:
						<Link href={mushroom.source}>
							<a> Wikipedia</a>
						</Link>
					</P>
				</section>
			))}

			{InEdible.filter((mushroom) => mushroom.pathName === id).map((mushroom) => (
				<section className={styles.description} key={mushroom.id}>
					<div className={styles.description__img}>
						<Image src={`${mushroom.img.src}`} width={640} height={480} objectFit="cover" alt="mushroom" />
					</div>
					<P className={styles.description__title} size="large" align="center">
						{mushroom.title}
					</P>
					<P className={styles.description__text} size="medium">
						{mushroom.cap}
					</P>
					<P className={styles.description__text} size="medium">
						{mushroom.stipe}
					</P>
					<P className={styles.description__text} size="medium">
						{mushroom.pulp}
					</P>
					<P className={styles.description__text} size="medium">
						{mushroom.tubular}
					</P>
					<P className={styles.description__source} size="verySmall" align="right">
						Источник:
						<Link href={mushroom.source}>
							<a> Wikipedia</a>
						</Link>
					</P>
				</section>
			))}
		</>
	);
};

export default EdiblePaths;
