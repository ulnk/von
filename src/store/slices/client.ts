import { createSlice } from "@reduxjs/toolkit";

export type TClientState = {
  username?: string;
  password?: string;
  steamGuard?: string;
};

const fetchState = (): TClientState => {
  const localState = localStorage.getItem("state.client");
  if (localState) return JSON.parse(localState);

  console.log(localState);

  return {};
};

const initialState: TClientState = fetchState();

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    attemptLogin: (
      state,
      action: {
        payload: {
          username: string | undefined;
          password: string | undefined;
          steamGuard: string | undefined;
        };
      }
    ) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.steamGuard = action.payload.steamGuard;

      localStorage.setItem("state.client", JSON.stringify(state));
    },
  },
});

export const { attemptLogin } = clientSlice.actions;
export default clientSlice.reducer;
