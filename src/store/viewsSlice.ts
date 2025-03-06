import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ViewsState {
  [key: string]: number;
}

const initialState: ViewsState = {};

const viewsSlice = createSlice({
  name: "views",
  initialState,
  reducers: {
    incrementView: (state, action: PayloadAction<string>) => {
      const blogId = action.payload;
      state[blogId] = (state[blogId] || 0) + 1;
    },
  },
});

export const { incrementView } = viewsSlice.actions;
export default viewsSlice.reducer;
