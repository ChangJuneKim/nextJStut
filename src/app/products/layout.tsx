import React from 'react';
import styles from './layout.module.css'

export default function ProductsLayout({children}: {children : React.ReactNode}) {
    return (
        <>
        <nav className={styles.nav}>
            <ul>
                <li><a href="">여성옷</a></li>
                <li><a href="">남성옷</a></li>
            </ul>
        </nav>
        <main>{children}</main>
        </>
    );
}