import styled from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  width: 9.3125rem;
  height: 3.6875rem;
  padding: 0.875rem 2rem;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.colors.secondary};
  font: ${({ theme }) => theme.typography.main};
  color: #f9fcf8;
`;

export default ButtonStyled;
