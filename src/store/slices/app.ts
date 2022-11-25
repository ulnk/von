import { createSlice } from "@reduxjs/toolkit";

const fetchState = (): AppState => {
  const localState = localStorage.getItem("state.app");
  if (localState) return JSON.parse(localState);

  return [];
};

export const appSlice = createSlice({
  name: "app",
  initialState: {
    ...fetchState(),
  },
  reducers: {},
});

export const {} = appSlice.actions;
export default appSlice.reducer;
