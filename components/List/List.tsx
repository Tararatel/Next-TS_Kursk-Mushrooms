import { ListProps } from './List.props';
import styles from './List.module.css';
import cn from 'classnames';
import { Card } from '../Card/Card';

export const List = ({ className, ...props }: ListProps): JSX.Element => {
	return (
		<section className={styles.list}>
			<div className={styles.list__wrapper}>
				<Card />
			</div>
		</section>
	);
};
