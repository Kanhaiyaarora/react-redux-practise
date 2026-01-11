import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: "Kanhaiya",
  },
  reducers: {
    changeUsername: (state) => {
      state.value = "paras";
    },
  },
});

console.log(counterSlice);
export const { changeUsername } = counterSlice.actions;
export default counterSlice.reducer;
