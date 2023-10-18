import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Model-X", "Model-S", "Model-Y", "Model-3"],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const SelectCars = (state) => state.car.cars;
