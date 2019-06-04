import React from 'react';
import styles from './Header.css';

const Header = () => (
    <nav
        className={styles.header}
    >
        <ul
            className={styles.navbar}
        >
            <li>list</li>
            <li>list</li>
            <li>list</li>
            <li>list</li>
            <li>list</li>
        </ul>
    </nav>
);

export default Header;
