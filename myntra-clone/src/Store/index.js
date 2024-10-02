import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";


const myntraStore = configureStore({
  reducer: {
    items:itemSlice.reducer,
    fetchstatus:fetchStatusSlice.reducer,
    bag:bagSlice.reducer,
  }

})

export default myntraStore;