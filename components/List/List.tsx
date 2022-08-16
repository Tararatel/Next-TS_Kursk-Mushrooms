import { ListProps } from './List.props';
import styles from './List.module.scss';
import { Card } from '../Card/Card';
import { P } from '../P/P';

export const List = ({ className, ...props }: ListProps): JSX.Element => {
	return (
		<>
			<P id="edible" size="large" align="center">
				Съедобные грибы
			</P>
			<section className={styles.list}>
				<div className={styles.list__wrapper}>
					<Card data="Edible" />
				</div>
			</section>
			<P id="inedible" size="large" align="center">
				Несъедобные и ядовитые грибы
			</P>
			<section className={styles.list}>
				<div className={styles.list__wrapper}>
					<Card data="Inedible" />
				</div>
			</section>
		</>
	);
};
