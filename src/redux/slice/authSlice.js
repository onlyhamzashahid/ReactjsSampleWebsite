import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
    isLoggedIn: false,
  },

  reducers: {
    // add your non-async reducers here
    login: (state, {payload}) => {
      state = {
        isLoggedIn: true,
        userData : payload,
      };
      return state;
    },

    logout: (state) => {
      state = {};
      return state;
    },

    signup: (state, action) => {
      state = {
        isLoggedIn: true,
        user: action.payload,
      };
      return state;
    },
  },
});



export const { login, logout,signup } = authSlice.actions;


export default authSlice.reducer;


