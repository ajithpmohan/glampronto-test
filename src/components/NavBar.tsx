import React from 'react';
import Nav from 'react-bootstrap/Nav';

// import styles from '@/styles/NavBar.module.css';

export default function NavBar() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/about-us">AboutUs</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
