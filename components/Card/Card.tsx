import { CardProps } from './Card.props';
import styles from './Card.module.scss';
import Image from 'next/image';
import { P } from '../P/P';
import { Edible } from '../../data/EdibleMushrooms/Edible';
import { InEdible } from '../../data/InedibleMushrooms/Edible';

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
						</div>
					))}
				</>
			);
		}
	}
};
