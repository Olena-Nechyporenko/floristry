import {
  HeaderWrapper,
  NavList,
  Link,
  AnchorLink,
  CartIcon,
} from './Header.module';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">Bouquet delivery</Link>

      <nav>
        <NavList>
          <li>
            <AnchorLink href="#about-us">About us</AnchorLink>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <AnchorLink href="#reviews">Reviews</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#contacts">Contacts</AnchorLink>
          </li>
          <li>
            <Link to="/cart">
              <CartIcon />
            </Link>
          </li>
        </NavList>
      </nav>
    </HeaderWrapper>
  );
};
