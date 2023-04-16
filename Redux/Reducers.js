import { createSlice } from "@reduxjs/toolkit";

export const recipeReducer = createSlice({
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
    
  },
  reducers: {
   toggleTwoballsize :  (state, action) => {    
      state.twoballsize = action.payload
    },  
    toggleFats :  (state, action) => {    
      state.fats = action.payload  
    },  
    togglect :  (state, action) => {    
      state.ct= action.payload  
    }, 
    toggleoldoughin :  (state, action) => {    
      state.olddoughin = action.payload  
    }, 
    toggleoldoughout :  (state, action) => {    
      state.olddoughout = action.payload  
    }, 
    toggleautolysis :  (state, action) => {    
      state.autolysis = action.payload  
    }, 
    togglebiga :  (state, action) => {    
      state.biga = action.payload  
    }, 
    togglepoolish :  (state, action) => {    
      state.poolish = action.payload  
    }, 
    toggledisplayon :  (state, action) => {    
      state.displayon = action.payload  
    }, 
  },
});

export const {
 toggleTwoballsize,
 toggleFats,
 toggleautolysis, togglebiga, togglect, toggledisplayon, toggleoldoughin, toggleoldoughout, togglepoolish
} = recipeReducer.actions;

export default recipeReducer.reducer;

// Component code


