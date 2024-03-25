import { HeaderWrapper, NavList, Link } from './Header.module';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Link>Bouquet delivery</Link>

      <nav>
        <NavList>
          <li>
            <Link>About us</Link>
          </li>
          <li>
            <Link>Catalog</Link>
          </li>
          <li>
            <Link>Contacts</Link>
          </li>
        </NavList>
      </nav>
    </HeaderWrapper>
  );
};
