import { PProps } from './P.props';
import styles from './P.module.scss';
import cn from 'classnames';

export const P = ({ size = 'medium', align, className, ...props }: PProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.verySmall]: size == 'verySmall',
				[styles.small]: size == 'small',
				[styles.medium]: size == 'medium',
				[styles.big]: size == 'big',
				[styles.large]: size == 'large',
				[styles.center]: align == 'center',
				[styles.left]: align == 'left',
				[styles.right]: align == 'right',
			})}
			{...props}
		></p>
	);
};
