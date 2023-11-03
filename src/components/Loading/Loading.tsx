import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled>
      <div className="loading-icon-container">
        <img
          width={"200px"}
          height={"300px"}
          className="gavel"
          src="../../../public/images/gavel-image.jpg"
          alt="Gavel hitting the sound block."
        />
        <span className="gavel__text">Loading</span>
      </div>
    </LoadingStyled>
  );
};

export default Loading;
