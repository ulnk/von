import { configureStore } from "@reduxjs/toolkit";

import app from "./slices/app";
import client from "./slices/client";

export default configureStore({
  reducer: { app, client },
});
