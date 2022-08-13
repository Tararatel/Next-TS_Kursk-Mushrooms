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
					<Link href={'/'}>
						<div className={styles.header__wrapper__logo}>
							<Logo />
							<P size="medium">Kursk Mushrooms</P>
						</div>
					</Link>

					<nav className={styles.header__wrapper__navigation}>
						<ul>
							<li>
								<P size="small">
									<Link href="/">
										<a>Главная</a>
									</Link>
								</P>
							</li>
							<li>
								<P size="small">
									<Link href="#edible">
										<a>Съедобные грибы</a>
									</Link>
								</P>
							</li>
							<li>
								<P size="small">
									<Link href="#inedible">
										<a>Несъедобные грибы</a>
									</Link>
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
