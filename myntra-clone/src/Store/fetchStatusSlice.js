import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchslice",
  initialState: {
    fetchDone: false,
    currentlyFetching:false,
  },
  reducers: {
    markFetchDone:(state) => {
      state.fetchDone = false;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFineshed: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;

