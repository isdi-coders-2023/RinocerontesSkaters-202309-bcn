import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 219px;
  gap: 10px;
  flex-shrink: 0;
  background: #234442;
  align-items: center;
  justify-content: space-evenly;

  .main-header__logo {
    width: 230.7px;
    height: 90.47px;
    transform: rotate(-5deg);
    flex-shrink: 0;
  }

  .navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export default HeaderStyled;
