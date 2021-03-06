import { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
	RiDashboardLine,
	RiGalleryLine,
	RiLogoutBoxRLine,
	RiPencilLine,
	RiSettings3Line,
	RiMenuLine,
	RiCloseLine,
} from 'react-icons/ri';
import styles from './SideNavbar.module.css';

const SideNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navToggleHandler = () => {
		setIsOpen(!isOpen);

		console.log(navToggleHandler);
	};

	return (
		<Fragment>
			<nav
				className={`${styles.sidenav} ${
					isOpen ? styles.navOpen : styles.navClosed
				}`}
			>
				<ul>
					<li className={styles.list}>
						<b></b>
						<b></b>
						<NavLink to='/dashboard' activeClassName={styles.active}>
							<span className={styles.icon}>
								<RiDashboardLine />
							</span>
							<span className={styles.title}>Dashboard</span>
						</NavLink>
					</li>
					<li className={styles.list}>
						<NavLink to='new-entry' activeClassName={styles.active}>
							<span className={styles.icon}>
								<RiPencilLine />
							</span>
							<span className={styles.title}>Journal</span>
						</NavLink>
					</li>
					<li className={styles.list}>
						<NavLink to='/gallery' activeClassName={styles.active}>
							<span className={styles.icon}>
								<RiGalleryLine />
							</span>
							<span className={styles.title}>Gallery</span>
						</NavLink>
					</li>
					<li className={styles.list}>
						<NavLink to='/settings' activeClassName={styles.active}>
							<span className={styles.icon}>
								<RiSettings3Line />
							</span>
							<span className={styles.title}>Settings</span>
						</NavLink>
					</li>
					<li className={styles.list}>
						<NavLink to='/sign-out' activeClassName={styles.active}>
							<span className={styles.icon}>
								<RiLogoutBoxRLine />
							</span>
							<span className={styles.title}>Sign Out</span>
						</NavLink>
					</li>
					<b></b>
				</ul>
			</nav>
			<div
				onClick={navToggleHandler}
				className={`${styles.toggle} ${
					!isOpen ? styles.open : styles.closed + ' ' + styles.inactive
				} `}
			>
				{!isOpen && <RiMenuLine className={styles.icono} />}
				{isOpen && <RiCloseLine className={styles.icono} />}
			</div>
		</Fragment>
	);
};

export default SideNavbar;
