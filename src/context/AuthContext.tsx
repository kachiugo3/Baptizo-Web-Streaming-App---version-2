"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";

export type Actions =
  | {
      type: "UPDATE_USER";
      payload: any;
    }
  | {
      type: "SIGN_UP";
      payload: {city_id: string; note_id: string; newText?: string};
    }
  | {
      type: "FORGOT_PASSWORD";
      payload: {city_id: string; newText?: string; note_id?: string};
    };

export type ContextStateType = {
  user: any;
};

export type AppContextType = {
  state: ContextStateType;
  dispatch: Dispatch<Actions>;
};

const initialState: ContextStateType = {
  user: {},
};

function AuthReducer(
  state: ContextStateType,
  action: Actions,
): ContextStateType {
  switch (action.type) {
    case "UPDATE_USER":
      console.log(state.user, action.payload);
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

const AuthProvider = ({children}: {children: ReactNode; value?: Actions}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const contextValue: AppContextType = {
    state,
    dispatch,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
