import styled from "styled-components";

const LoadingStyled = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  align-content: flex-end;
  background-color: ${({ theme }) => theme.colors.darkShadow};
  justify-content: center;
  align-items: center;

  .loading-icon-container {
    position: relative;
  }

  .gavel {
    width: 312px;
    border-radius: 50%;
    border: 13px solid ${({ theme }) => theme.colors.dark};

    &__text {
      inset: 187px 0px 0px 72px;
      color: black;
      position: absolute;
      font-size: 40px;
      text-transform: uppercase;
      font-weight: 700;
      text-shadow: 0px 4px 4px ${({ theme }) => theme.colors.lighterGrey};
    }
  }

  @media (prefers-reduced-motion) {
    content: url("/images/gavel-image.jpg");
  }
`;

export default LoadingStyled;
