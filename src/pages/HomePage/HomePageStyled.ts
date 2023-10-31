import styled from "styled-components";

const StyledHomePage = styled.div`
  background-color: ${({ theme }) => theme.colors.background};

  .character-title {
    text-align: center;
    font-size: ${({ theme }) => theme.typography.titleSize};
    padding: 20px 0 25px;
  }
`;

export default StyledHomePage;
