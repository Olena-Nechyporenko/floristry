import styled from 'styled-components';
import img from '../../images/wide-a.jpg';

export const AdvantagesSection = styled.section`
  padding: 20px 0;

  @media screen and (min-width: 768px) {
    padding: 30px 0;
  }
`;

export const List = styled.ul``;

export const Item = styled.li`
  display: flex;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-grow: 1;
`;

export const DescrTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  width: 400px;
`;

export const ImageWrapperRight = styled.div`
  /* background-image: url(${img});
  background-size: cover; */
  width: 500px;
  height: 400px;
  border-radius: 30% 0 0 30%;
  overflow: hidden;
`;

export const ImageWrapperLeft = styled.div`
  /* background-image: url(${img});
  background-size: cover; */
  width: 500px;
  height: 400px;
  border-radius: 0 30% 30% 0;
  overflow: hidden;
`;
