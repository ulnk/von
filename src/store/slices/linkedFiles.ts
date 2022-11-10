import { createSlice } from "@reduxjs/toolkit";

const fetchState = (): AppState => {
  const localState = localStorage.getItem("appState");
  if (localState) return JSON.parse(localState);

  return [];
};

export const appSlice = createSlice({
  name: "app",
  initialState: {
    all: fetchState(),
  },
  reducers: {},
});

export const {} = appSlice.actions;
export default appSlice.reducer;
