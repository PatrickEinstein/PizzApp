import { createSlice } from "@reduxjs/toolkit";

export  const recipeReducer = createSlice({
  name: "recipe",
  initialState: {
    twoballsize: 0,
    fats: 0,
    ct: 0,
    olddoughin: 0,
    olddoughout: 0,
    autolysis: 0,
    biga: 0,
    poolish: 0,
    displayon: 0,
    doughball02: 0,
    ballweight2: 0,
    flour2: 0,
    flour3: 0,
    flour4: 0,
    flour5: 0,
    flour6: 0,
  },
  reducers: {
    toggleTwoballsize: (state, action) => {
      state.twoballsize = action.payload;
    },
    toggleFats: (state, action) => {
      state.fats = action.payload;
    },
    togglect: (state, action) => {
      state.ct = action.payload;
    },
    toggleoldoughin: (state, action) => {
      state.olddoughin = action.payload;
    },
    toggleoldoughout: (state, action) => {
      state.olddoughout = action.payload;
    },
    toggleautolysis: (state, action) => {
      state.autolysis = action.payload;
    },
    togglebiga: (state, action) => {
      state.biga = action.payload;
    },
    togglepoolish: (state, action) => {
      state.poolish = action.payload;
    },
    toggledisplayon: (state, action) => {
      state.displayon = action.payload;
    },
    toggledoughball02: (state, action) => {
      state.doughball02 = action.payload;
    },
    toggleballweight2: (state, action) => {
      state.ballweight2 = action.payload;
    },
    toggleflour2: (state, action) => {
      state.flour2 = action.payload;
    },
    toggleflour3: (state, action) => {
      state.flour3 = action.payload;
    },
    toggleflour4: (state, action) => {
      state.flour4 = action.payload;
    },
    toggleflour5: (state, action) => {
      state.flour5 = action.payload;
    },
    toggleflour6: (state, action) => {
      state.flour6 = action.payload;
    },
  },
});

export const {
  toggleTwoballsize,
  toggleFats,
  toggleautolysis,
  toggledoughball02,
  toggleballweight2,
  togglebiga,
  togglect,
  toggledisplayon,
  toggleoldoughin,
  toggleoldoughout,
  togglepoolish,
  toggleflour2,
  toggleflour3,
  toggleflour4,
  toggleflour5,
  toggleflour6,
} = recipeReducer.actions;

export default recipeReducer.reducer;


