import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  loading: true,
  error: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setError } = uiSlice.actions;

export default uiSlice.reducer;
