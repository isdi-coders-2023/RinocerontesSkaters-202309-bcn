import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled>
      <div>
        <img
          className="gavel"
          src="../../../public/images/gavel.gif"
          alt="gavel-gif"
        />
      </div>
    </LoadingStyled>
  );
};

export default Loading;
