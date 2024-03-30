import { useEffect, useState } from 'react';
import {
  HeaderWrapper,
  NavList,
  LinkNav,
  AnchorLink,
  CartIcon,
  LinkNavHome,
} from './Header.module';

export const Header = () => {
  const [anchor, setAnchor] = useState('');

  useEffect(() => {
    const targetElement = document.getElementById(anchor?.id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [anchor]);

  const handleClick = e => {
    setAnchor({ id: e.target.name });
  };
  return (
    <HeaderWrapper>
      <LinkNavHome to="/">Bouquet delivery</LinkNavHome>

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
          <AnchorLink to="/" name="reviews" onClick={handleClick}>
            Reviews
          </AnchorLink>
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
      </nav>
    </HeaderWrapper>
  );
};
