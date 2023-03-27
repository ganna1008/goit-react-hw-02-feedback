import styled from 'styled-components';

export const StatisticsItem = styled.li`
  font-size: 20px;
  :not(:last-child) {
    margin-bottom: 10px;
  }

  width: 350px;
`;

export const StatisticsSpan = styled.span`
  font-weight: 500;
`;

export const StatisticsWrapper = styled.ul`
  list-style: none;
  padding-left: 0;
`;
