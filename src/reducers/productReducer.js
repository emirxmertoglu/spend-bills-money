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
  reducers: {
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;

      const product = state.products.find((product) => product.id === id);

      if (type === "buy") {
        product.quantity++;
      } else if (type === "sell") {
        product.quantity--;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    }),
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.map((product) => {
          return { ...product, quantity: 0 };
        });
      }),
      builder.addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { updateQuantity } = productsSlice.actions;

export default productsSlice.reducer;
