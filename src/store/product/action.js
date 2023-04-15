import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpService } from "../../utils/service";

export const getProducts = createAsyncThunk("feat/getProducts", async () => {
  try {
    const response = await httpService.get("/product");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const getProduct = createAsyncThunk(
  "feat/getProduct",
  async (productID) => {
    try {
      const response = await httpService.get(`/product/${productID}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
