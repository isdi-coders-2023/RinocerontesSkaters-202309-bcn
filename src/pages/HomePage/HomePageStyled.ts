import styled from "styled-components";

const StyledHomePage = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;

  .character-title {
    text-align: center;
    font-size: ${({ theme }) => theme.typography.titleSize};
    padding: 20px 0 25px 0;
    color: ${({ theme }) => theme.colors.light};
  }
`;

export default StyledHomePage;
