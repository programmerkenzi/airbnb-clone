/*
 * @Description:
 * @Author: Kenzi
 * @Date: 2021-08-22 18:30:28
 * @LastEditTime: 2021-08-24 18:25:25
 * @LastEditors: Kenzi
 */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.profile = action.payload;
    },
  },
});

// //Selectors

export const selectIsAuthenticated = (state) => state.user.isAuthenticated;

export const { setIsAuthenticated } = userSlice.actions;

export default userSlice.reducer;
