import { useEffect, useState } from 'react';
import {
  BackDrop,
  Aside,
  Container,
  CloseButton,
  CloseIcon,
  NavList,
  LinkNav,
  AnchorLink,
} from './MobileMenu.styled';

export const MobileMenu = ({ onClose }) => {
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

  useEffect(() => {
    const handleCloseOnKeydown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleCloseOnKeydown);

    return () => {
      window.removeEventListener('keydown', handleCloseOnKeydown);
    };
  }, [onClose]);

  const handleCloseOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <BackDrop onClick={handleCloseOnBackdrop}>
      <Aside>
        <Container>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
          <NavList>
            <li>
              <AnchorLink to="/" name="about-us" onClick={handleClick}>
                About us
              </AnchorLink>
            </li>
            <li>
              <LinkNav to="/catalog" onClick={onClose}>
                Catalog
              </LinkNav>
            </li>
            <li>
              <LinkNav to="/weddings" onClick={onClose}>
                Weddings
              </LinkNav>
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
          </NavList>
        </Container>
      </Aside>
    </BackDrop>
  );
};
