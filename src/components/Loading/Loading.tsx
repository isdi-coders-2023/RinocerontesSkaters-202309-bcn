import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled>
      <div className="loading-icon-container">
        <img
          className="gavel"
          src="../../../public/images/gavel.gif"
          alt="gavel-gif"
        />
        <span className="gavel__text">Loading</span>
      </div>
    </LoadingStyled>
  );
};

export default Loading;
