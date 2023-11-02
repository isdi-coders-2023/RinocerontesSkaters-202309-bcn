import styled from "styled-components";

const NavigationStyled = styled.nav`
  width: 100%;

  .container-list {
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;

    &__icon {
    }

    &__active {
      border-bottom: solid 3px ${({ theme }) => theme.colors.yellow};
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      padding-bottom: 2px;
    }
  }
`;

export default NavigationStyled;
