import styled from "styled-components";

const StyledHomePage = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;

  .character-list-title {
    font-size: ${({ theme }) => theme.typography.titleSize};
    padding: 20px 0 25px 0;
    color: ${({ theme }) => theme.colors.light};
    text-overflow: ellipsis;
    overflow: overlay;
  }
`;

export default StyledHomePage;
