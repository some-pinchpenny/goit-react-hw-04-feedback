import styled from 'styled-components';

export const FedbackOptionWrapper = styled.div`
  display: flex;
  gap: 25px;
  margin-bottom: 15px;
`;
export const FedbackOptionBtn = styled.button`
  background: transparent;
  border: none;
  color: ${({ iconColor }) => {
    switch (iconColor) {
      case 'good':
        return 'green';
      case 'neutral':
        return '#f8cc09';
      case 'bad':
        return 'red';
      default:
        break;
    }
  }};
  :hover {
    color: #000000;
  }
`;
