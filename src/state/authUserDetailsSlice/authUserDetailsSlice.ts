import { PayloadAction, createSlice } from "@reduxjs/toolkit/";

export type userAuthType = {
  token: string;
  email: string;
  refresh_token: string;
};

let initialState: userAuthType = {
  email: "",
  token: "",
  refresh_token: "",
};

export const userAuthDetailsSlice = createSlice({
  name: "authDetails",
  initialState: initialState,
  reducers: {
    setUserAuthDetails: (state, action: PayloadAction<userAuthType>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setUserAuthToken: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        token: action.payload,
      };
    },
    setUserRefreshToken: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        token: action.payload,
      };
    },
  },
});

export const { setUserAuthDetails, setUserAuthToken } =
  userAuthDetailsSlice.actions;
export default userAuthDetailsSlice.reducer;
