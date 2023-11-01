import styled from "styled-components";

const NavigationStyled = styled.nav`
  padding: 0px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .icon {
    &__active {
      border-bottom: solid 3px #fef698;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      padding-bottom: 2px;
    }
  }
`;

export default NavigationStyled;
