import { useEffect, useState } from 'react';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import {
  HeaderWrapper,
  NavList,
  LinkNav,
  AnchorLink,
  CartIcon,
  LinkNavHome,
  MobileNavList,
  BurgerIcon,
} from './Header.module';

export const Header = () => {
  const [anchor, setAnchor] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const targetElement = document.getElementById(anchor?.id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [anchor]);

  const handleClick = e => {
    setAnchor({ id: e.target.name });
  };

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <HeaderWrapper>
        <LinkNavHome to="/">Floristic Paradise</LinkNavHome>

        <nav>
          <NavList>
            <li>
              <AnchorLink to="/" name="about-us" onClick={handleClick}>
                About us
              </AnchorLink>
            </li>
            <li>
              <LinkNav to="/catalog">Catalog</LinkNav>
            </li>
            <li>
              <LinkNav to="/weddings">Weddings</LinkNav>
            </li>
            <li>
              <AnchorLink to="/" name="reviews" onClick={handleClick}>
                Reviews
              </AnchorLink>
            </li>
            <li>
              <AnchorLink name="contacts" onClick={handleClick}>
                Contacts
              </AnchorLink>
            </li>
            <li>
              <LinkNav to="/cart">
                <CartIcon />
              </LinkNav>
            </li>
          </NavList>

          <MobileNavList>
            <li>
              <BurgerIcon onClick={handleMobileMenuOpen} />
            </li>
            <li>
              <LinkNav to="/cart">
                <CartIcon />
              </LinkNav>
            </li>
          </MobileNavList>
        </nav>
      </HeaderWrapper>
      {mobileMenuOpen && <MobileMenu onClose={handleMobileMenuOpen} />}
    </>
  );
};
