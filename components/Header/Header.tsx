import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import { ForwardedRef, forwardRef } from 'react';
import { P } from '../P/P';
import { Divider } from '../Divider/Divider';
import Link from 'next/link';
import { Logo } from '../Logo/Logo';

export const Header = ({ className, ...props }: HeaderProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	return (
		<>
			<header className={styles.header} {...props}>
				<div className={styles.header__wrapper}>
					<div className={styles.header__wrapper__logo}>
						<Logo />
						<P size="medium">Kursk Mushrooms</P>
					</div>
					<nav className={styles.header__wrapper__navigation}>
						<ul>
							<li>
								<P size="small">
									<Link href="#">link 1</Link>
								</P>
							</li>
							<li>
								<P size="small">
									<Link href="#">link 2</Link>
								</P>
							</li>
							<li>
								<P size="small">
									<Link href="#">Карта</Link>
								</P>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<Divider />
		</>
	);
};
