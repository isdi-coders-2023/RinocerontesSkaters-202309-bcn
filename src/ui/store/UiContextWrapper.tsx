import { PropsWithChildren, useState, useMemo } from "react";
import UiContext from "./UiContext";

const UiContextWrapper = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Memoize the value object to prevent it from changing on every render
  const contextValue = useMemo(
    () => ({ isLoading, setIsLoading, isError, setIsError }),
    [isLoading, setIsLoading, isError, setIsError],
  );

  return (
    <UiContext.Provider value={contextValue}>{children}</UiContext.Provider>
  );
};

export default UiContextWrapper;
