import { PropsWithChildren, useState } from "react";
import UiContext from "./UiContext";

const UiContextWrapper = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <UiContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </UiContext.Provider>
  );
};

export default UiContextWrapper;
