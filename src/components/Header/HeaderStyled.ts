import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  height: 219px;
  gap: 10px;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: space-evenly;

  .main-header__logo {
    width: 230.7px;
    height: 90.47px;
    transform: rotate(-5deg);
    flex-shrink: 0;
    margin-top: 20px;
  }
`;

export default HeaderStyled;
