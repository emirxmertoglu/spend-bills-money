import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_PRODUCTS_API_URL}/products`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    }),
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = state.products.concat(action.payload);
      }),
      builder.addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
