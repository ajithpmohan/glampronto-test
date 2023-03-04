import React from 'react';
import Link from 'next/link';
// import styles from '@/styles/NavBar.module.css';

export default function NavBar() {
  return (
    // <nav className={styles.nav}>
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about-us">About</Link>
        </li>
      </ul>
      <hr />
    </nav>
  );
}
