import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    entities: [],
    error: null,
  },
  reducers: {
    addItem: (state, action) => {
      if (state.entities.length === 0) {
        state.entities = [action.payload];
      } else {
        const isExist = state.entities.filter(
          (item) => item.id === action.payload.id
        );
        if (isExist.length === 0) {
          state.entities = [...state.entities, action.payload];
        }
      }
    },
  },
  // extraReducers: (builder) =>
  //   builder
  //     .addCase(productAct.getProducts.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(productAct.getProducts.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.entities = action.payload;
  //     })
  //     .addCase(productAct.getProducts.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action;
  //     })
  //     .addCase(productAct.getProduct.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(productAct.getProduct.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.entity = action.payload;
  //     })
  //     .addCase(productAct.getProduct.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action;
  //     }),
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
