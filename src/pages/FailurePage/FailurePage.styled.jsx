import styled from 'styled-components';
import { PiWarningCircle } from 'react-icons/pi';
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
  width: 90%;
  height: 300px;
  background-color: rgba(255, 84, 84, 0.6);
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: var(--main-dark-text-color);

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const Text = styled.p`
  font-size: 23px;
  font-weight: 500;
  text-align: center;
  width: 450px;
  color: var(--main-dark-text-color);
`;

export const CheckIcon = styled(PiWarningCircle)`
  width: 70px;
  height: 70px;
  fill: #ff1616;
`;

export const ArrowIcon = styled(IoIosArrowForward)`
  width: 20px;
  height: 20px;
  fill: #ff1616;
  transition: all var(--main-transition);
`;

export const Link = styled(NavLink)`
  font-size: 25px;
  font-weight: 500;
  color: #ff1616;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all var(--main-transition);

  &:hover {
    color: #ff6d6d;

    & ${ArrowIcon} {
      fill: #ff6d6d;
    }
  }
`;
