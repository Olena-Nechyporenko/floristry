import styled from 'styled-components';

export const AboutUs = styled.section`
  display: flex;
  gap: 25px;
  padding: 70px 0;
`;

export const TitleWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 0 30% 30% 0;
  overflow: hidden;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  height: 100%;
  background-color: #e6b8ca;
  transform: rotate(-90deg);
`;

export const Text = styled.p`
  font-size: 25px;
  font-weight: 500;
  display: flex;
  align-items: center;
  flex-grow: 1;
  width: 800px;
  color: var(--main-dark-text-color);
  padding-right: 20px;
`;
