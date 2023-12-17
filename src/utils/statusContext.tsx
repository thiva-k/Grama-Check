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

import React, { createContext, useContext, useState, ReactNode } from "react";

// interface StatusItem {
//   certificateNumber: string;
//   idCheckStatus: string;
//   addressCheckStatus: string;
//   policeCheckStatus: string;
// }

interface StatusItem {
  name: string;
  address: string;
  nicNumber: string;
  certificateNo: string;
  police_check_status: string;
  id_check_status: string;
  address_check_status: string;
}

interface StatusItemsContextProps {
  statusItems: StatusItem[];
  updateStatusItems: (newStatusItems: StatusItem[]) => void;
  decodedToken: Record<string, any> | null;
  updateDecodedToken: (newDecodedToken: Record<string, any> | null) => void;
  token: string | null;
  updateToken: (newToken: string | null) => void;
}

const StatusItemsContext = createContext<StatusItemsContextProps>({
  statusItems: [],
  updateStatusItems: () => {},
  decodedToken: null,
  updateDecodedToken: () => {},
  token: null,
  updateToken: () => {},
});

interface StatusItemsProviderProps {
  children: ReactNode;
}

export const StatusItemsProvider: React.FC<StatusItemsProviderProps> = ({
  children,
}) => {
  const [statusItems, setStatusItems] = useState<StatusItem[]>([]);
  const [decodedToken, setDecodedToken] = useState<Record<string, any> | null>(
    null
  );
  const [token, setToken] = useState<string | null>(null);

  const updateStatusItems = (newStatusItems: StatusItem[]) => {
    // setStatusItems((prevStatusItems) => [
    //   ...prevStatusItems,
    //   ...newStatusItems,
    // ]);
    setStatusItems(newStatusItems)
  };

  const updateDecodedToken = (newDecodedToken: Record<string, any> | null) => {
    setDecodedToken(newDecodedToken);
  };
  const updateToken = (newToken: string | null) => {
    setToken(newToken);
  };

  return (
    <StatusItemsContext.Provider
      value={{
        statusItems,
        updateStatusItems,
        decodedToken,
        updateDecodedToken,
        token,
        updateToken
      }}
    >
      {children}
    </StatusItemsContext.Provider>
  );
};

export const useStatusItems = () => {
  return useContext(StatusItemsContext);
};
