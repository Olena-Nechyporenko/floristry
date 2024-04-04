import styled from 'styled-components';
import img from '../../images/wide-a.jpg';

export const AdvantagesSection = styled.section`
  padding-bottom: 70px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  li:nth-child(odd) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 768px) {
    gap: 0;

    li:nth-child(odd) {
      flex-direction: row;
    }
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-grow: 1;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const DescrTitle = styled.h2`
  font-size: 26px;
  font-weight: 500;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  padding: 0 10px;

  @media screen and (min-width: 768px) {
    width: 330px;
    padding: 0;
  }

  @media screen and (min-width: 1200px) {
    width: 400px;
  }
`;

export const ImageWrapperRight = styled.div`
  /* background-image: url(${img});
  background-size: cover; */
  width: 100%;
  height: 400px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 350px;
    height: 300px;
    border-radius: 30% 0 0 30%;
  }

  @media screen and (min-width: 1200px) {
    width: 500px;
    height: 400px;
  }
`;

export const ImageWrapperLeft = styled.div`
  /* background-image: url(${img});
  background-size: cover; */
  width: 100%;
  height: 400px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 350px;
    height: 300px;
    border-radius: 0 30% 30% 0;
  }

  @media screen and (min-width: 1200px) {
    width: 500px;
    height: 400px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 400px;

  @media screen and (min-width: 768px) {
    width: 350px;
    height: 300px;
  }

  @media screen and (min-width: 1200px) {
    width: 500px;
    height: 400px;
  }
`;
