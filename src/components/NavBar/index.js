import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Logo } from '../Logo';
import { useTranslation } from 'react-i18next';

export const NavBar = () => {
  const [colorChange, setColorChange] = useState(false);
  const [t, i18n] = useTranslation('global');

  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <>
      <Navbar
        className={colorChange ? 'navbar colorChange' : 'navbar'}
        collapseOnSelect
        variant={colorChange ? 'light' : 'dark'}
        expand="lg"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/" className="ml-5">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mt-4 ms-5">
              <Nav.Link href="/#us">
                <h4>{t('navbar.About Us')}</h4>
              </Nav.Link>
              <Nav.Link href="/selection">
                <h4>{t('navbar.Selection')}</h4>
              </Nav.Link>
              <Nav.Link href="/evaluation">
                <h4>{t('navbar.Assessment')}</h4>
              </Nav.Link>
              <Nav.Link href="/training">
                <h4>{t('navbar.Training')}</h4>
              </Nav.Link>
              <Nav.Link href="/#contact">
                <h4>{t('navbar.Contact')}</h4>
              </Nav.Link>

              <NavDropdown
                id="collapsible-nav-dropdown"
                title={t('navbar.Language')}
                className="mt-1"
              >
                <NavDropdown.Item
                  onClick={() => i18n.changeLanguage('es')}
                  href="#/action-2"
                >
                  <span role="img" aria-label="sp">
                    🇪🇸 &nbsp; {t('navbar.spanish')}
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => i18n.changeLanguage('en')}
                  href="#/action-1"
                >
                  <span role="img" aria-label="en">
                    🇬🇧 &nbsp; {t('navbar.english')}
                  </span>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
