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

  .gavel {
    width: 312px;
    border-radius: 50%;
    border: 13px solid #000;
  }
`;

export default LoadingStyled;
