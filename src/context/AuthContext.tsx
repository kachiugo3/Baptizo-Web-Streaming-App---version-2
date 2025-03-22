"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
// import {TFavouriteCities, ICitiesInfo, IWeatherWithForcast} from "../types";
// import {
//   addNoteToCity,
//   editNoteInCity,
//   removeNoteFromCity,
//   toggleFavoriteCity,
// } from "../utils/context-functions";
// import {getLocalStorageItem, setLocalStorageItem} from "../utils/storage";

// const LocalStorageKey = process.env.REACT_APP_LOCAL_STORAGE_KEY as string;

export type Actions =
  | {
      type: "LOGIN";
      payload: {email: string; password: string};
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
  // favoriteCities: TFavouriteCities;
  // topCitiesToShow: IWeatherWithForcast[] | null;
  // lastSearchResult: IWeatherWithForcast[];
  // searchStatus: "typing" | "loading" | "none";
  // currentLocation: string | null;
  // isRehydrating: boolean;
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
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({children}: {children: ReactNode; value?: Actions}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //get data from local storage and store in state if it exist.
  useEffect(() => {
    const stateFromLocalStorage =
      getLocalStorageItem<ContextStateType>(LocalStorageKey);
    if (stateFromLocalStorage) {
      dispatch({
        type: "UPDATE_STATE",
        payload: {state: {...stateFromLocalStorage}},
      });
      dispatch({
        type: "UPDATE_HYDRATION_STATUS",
        payload: {data: false},
      });
      return;
    }
    dispatch({
      type: "UPDATE_HYDRATION_STATUS",
      payload: {data: false},
    });
    setLocalStorageItem(LocalStorageKey, initialState);
  }, []);

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
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

export default AppProvider;
