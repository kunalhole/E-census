import { configureStore } from "@reduxjs/toolkit"
import dashboardReducer from "./dashboardSlice/index"
export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
})
