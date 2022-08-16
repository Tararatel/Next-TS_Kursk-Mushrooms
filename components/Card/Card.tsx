import { CardProps } from './Card.props';
import styles from './Card.module.scss';
import Image from 'next/image';
import { P } from '../P/P';
import { Edible } from '../../data/EdibleMushrooms/Edible';
import { InEdible } from '../../data/InedibleMushrooms/InEdible';
import Link from 'next/link';

export const Card = ({ className, data, ...props }: CardProps): JSX.Element => {
	{
		if (data == 'Edible') {
			return (
				<>
					{Edible.map((card) => (
						<div className={styles.card} key={card.title}>
							<div className={styles.card__img}>
								<Image src={`${card.img.src}`} width={387} height={284} objectFit="cover" alt="mushroom" />
							</div>
							<P className={styles.card__from} size="verySmall">
								{`${card.latin}`}
							</P>
							<P className={styles.card__title} size="big">{`${card.title}`}</P>
							<P className={styles.card__text} size="small">{`${card.text}`}</P>
							<Link href={`/mushrooms/${card.id}`} as={`/mushrooms/${card.pathName}`}>
								<a>
									<P className={styles.card__link} size="verySmall" align="left">
										Подробнее
									</P>
								</a>
							</Link>
						</div>
					))}
				</>
			);
		} else {
			return (
				<>
					{InEdible.map((card) => (
						<div className={styles.card} key={card.title}>
							<div className={styles.card__img}>
								<Image src={`${card.img.src}`} width={387} height={284} objectFit="cover" alt="mushroom" />
							</div>
							<P className={styles.card__from} size="verySmall">
								{`${card.latin}`}
							</P>
							<P className={styles.card__title} size="big">{`${card.title}`}</P>
							<P className={styles.card__text} size="small">{`${card.text}`}</P>
							<Link href={`/mushrooms/${card.id}`} as={`/mushrooms/${card.pathName}`}>
								<a>
									<P className={styles.card__link} size="verySmall" align="left">
										Подробнее
									</P>
								</a>
							</Link>
						</div>
					))}
				</>
			);
		}
	}
};
