import styled from 'styled-components';
import { FaRegCircleCheck } from 'react-icons/fa6';
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
  gap: 30px;
  width: 90%;
  height: 300px;
  background-color: rgba(98, 248, 133, 0.6);
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: var(--main-dark-text-color);
  padding: 0 10px;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

const isDisable = props => {
  switch (props.disabled) {
    case false:
      return 'pointer';
    case true:
      return 'not-allowed';
    default:
      return 'not-allowed';
  }
};

export const Button = styled.button`
  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  background-color: #0e8b00;
  color: #ffffff;
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  cursor: ${isDisable};
`;

export const CheckIcon = styled(FaRegCircleCheck)`
  width: 70px;
  height: 70px;
  fill: #0e8b00;
`;

export const ArrowIcon = styled(IoIosArrowForward)`
  width: 20px;
  height: 20px;
  fill: #0e8b00;
  transition: all var(--main-transition);
`;

export const Link = styled(NavLink)`
  font-size: 25px;
  font-weight: 500;
  color: #0e8b00;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all var(--main-transition);

  &:hover {
    color: #15cf00;

    & ${ArrowIcon} {
      fill: #15cf00;
    }
  }
`;
