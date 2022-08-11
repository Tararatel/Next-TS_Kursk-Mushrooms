import { LogoProps } from './Logo.props';
import styles from './Logo.module.scss';
import LogoImg from './logo.png';
import Image from 'next/image';

export const Logo = ({ className, ...props }: LogoProps): JSX.Element => {
	return (
		<div className={styles.logo}>
			<Image src={LogoImg} alt="logo" />
		</div>
	);
};
