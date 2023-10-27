import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from "./clickedSlice"

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
})