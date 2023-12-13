// import React, { createContext, useContext, useState, ReactNode } from "react";

// interface StatusItem {
//   certificateNumber: string;
//   idCheckStatus: string;
//   addressCheckStatus: string;
//   policeCheckStatus: string;
// }

// interface StatusItemsContextProps {
//   statusItems: StatusItem[];
//   updateStatusItems: (newStatusItems: StatusItem[]) => void;
// }

// const StatusItemsContext = createContext<StatusItemsContextProps>({
//   statusItems: [],
//   updateStatusItems: () => {},
// });

// interface StatusItemsProviderProps {
//   children: ReactNode;
// }

// export const StatusItemsProvider: React.FC<StatusItemsProviderProps> = ({
//   children,
// }) => {
//   const [statusItems, setStatusItems] = useState<StatusItem[]>([]);

//   const updateStatusItems = (newStatusItems: StatusItem[]) => {
//     setStatusItems((prevStatusItems) => [
//       ...prevStatusItems,
//       ...newStatusItems,
//     ]);
//   };

//   return (
//     <StatusItemsContext.Provider value={{ statusItems, updateStatusItems }}>
//       {children}
//     </StatusItemsContext.Provider>
//   );
// };

// export const useStatusItems = () => {
//   return useContext(StatusItemsContext);
// };

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface StatusItem {
  certificateNumber: string;
  idCheckStatus: string;
  addressCheckStatus: string;
  policeCheckStatus: string;
}

interface StatusItemsContextProps {
  statusItems: StatusItem[];
  updateStatusItems: (newStatusItems: StatusItem[]) => void;
  decodedToken: Record<string, any> | null;
  updateDecodedToken: (newDecodedToken: Record<string, any> | null) => void;
}

const StatusItemsContext = createContext<StatusItemsContextProps>({
  statusItems: [],
  updateStatusItems: () => {},
  decodedToken: null,
  updateDecodedToken: () => {},
});

interface StatusItemsProviderProps {
  children: ReactNode;
}

export const StatusItemsProvider: React.FC<StatusItemsProviderProps> = ({
  children,
}) => {
  const [statusItems, setStatusItems] = useState<StatusItem[]>([]);
  const [decodedToken, setDecodedToken] = useState<Record<string, any> | null>(null);

  const updateStatusItems = (newStatusItems: StatusItem[]) => {
    setStatusItems((prevStatusItems) => [
      ...prevStatusItems,
      ...newStatusItems,
    ]);
  };

  const updateDecodedToken = (newDecodedToken: Record<string, any> | null) => {
    setDecodedToken(newDecodedToken);
  };

  return (
    <StatusItemsContext.Provider
      value={{
        statusItems,
        updateStatusItems,
        decodedToken,
        updateDecodedToken,
      }}
    >
      {children}
    </StatusItemsContext.Provider>
  );
};

export const useStatusItems = () => {
  return useContext(StatusItemsContext);
};
