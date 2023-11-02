import styled from "styled-components";

const LoadingStyled = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  align-content: flex-end;
  background-color: #000000cc;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .gavel {
    width: 312px;
    border-radius: 50%;
    border: 13px solid #000;

    &__text {
      inset: 396px 0px 0px 326px;
      color: black;
      position: absolute;
      font-size: 40px;
      text-transform: uppercase;
      font-weight: 700;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;

export default LoadingStyled;
