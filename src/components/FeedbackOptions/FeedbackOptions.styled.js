import styled from 'styled-components';
export const FeedbackOptionsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  color: grey;
  text-transform: capitalize;
  padding: 5px;
  border: grey solid 1px;
  border-radius: 2px;
  :hover {
    -webkit-box-shadow: 0px 10px 13px -7px #000000,
      5px 5px 15px 5px rgba(0, 0, 0, 0);
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  }
  cursor: pointer;
`;
