import styled from 'styled-components';
import { PiSmileySad } from 'react-icons/pi';
import { IoIosArrowForward } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const EmojiIcon = styled(PiSmileySad)`
  width: 150px;
  height: 150px;
  fill: var(--main-green-color);
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: var(--main-dark-text-color);
`;

export const ArrowIcon = styled(IoIosArrowForward)`
  width: 20px;
  height: 20px;
  fill: var(--main-green-color);
  transition: all var(--main-transition);
`;

export const Link = styled(NavLink)`
  font-size: 25px;
  font-weight: 500;
  color: var(--main-green-color);
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all var(--main-transition);

  &:hover {
    color: var(--main-pink-color);

    & ${ArrowIcon} {
      fill: var(--main-pink-color);
    }
  }
`;
