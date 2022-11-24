import { configureStore } from "@reduxjs/toolkit";

import app from "./slices/app";

export default configureStore({
  reducer: { app },
});
