import styled from "styled-components";

const CharacterCardStyled = styled.article`
  margin: 25px 50px;
  border: 4px solid ${({ theme }) => theme.colors.darkGrey};
  background-image: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.lighter} 39.14%,
    ${({ theme }) => theme.colors.lightGrey} 97.99%
  );
  filter: drop-shadow(-2px 0px 17px ${({ theme }) => theme.colors.sky});
  width: 340px;
  height: 550px;
  border-radius: 60px;
  max-width: 340px;
  min-width: 180px;
  border-radius: 60px;

  .character-card {
    display: flex;
    justify-content: center;
    height: 500px;
    margin-bottom: 25px;
    padding: 25px 14px;
    position: relative;

    &__image {
      border-radius: 50px 50px 0px 0px;
      padding-bottom: 25px;
      object-fit: cover;
      border-bottom: 3px solid ${({ theme }) => theme.colors.lighter};
    }

    &__title {
      width: 90%;
      font-size: ${({ theme }) => theme.typography.nameSize};
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.lighter};
      position: absolute;
      top: 300px;
      background-color: ${({ theme }) => theme.colors.shadow};
      overflow: hidden;
    }
  }
`;

export default CharacterCardStyled;
