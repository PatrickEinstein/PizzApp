import { createSlice } from "@reduxjs/toolkit";

export const recipeReducer = createSlice({
  name: "recipe",
  initialState: {
    twoballsize: false,
    fats: false,
    ct: false,
    olddoughin: false,
    olddoughout: false,
    autolysis: false,
    biga: false,
    poolish: false,
    displayon: false,
    
  },
  reducers: {
   toggleTwoballsize :  (state, action) => {    
      state.twoballsize = action.payload  
    },  
    toggleFats :  (state, action) => {    
      state.twoballsize = action.payload  
    },  
    togglect :  (state, action) => {    
      state.twoballsize = action.payload  
    }, 
    toggleoldoughin :  (state, action) => {    
      state.twoballsize = action.payload  
    }, 
    toggleoldoughout :  (state, action) => {    
      state.twoballsize = action.payload  
    }, 
    toggleautolysis :  (state, action) => {    
      state.twoballsize = action.payload  
    }, 
    togglebiga :  (state, action) => {    
      state.twoballsize = action.payload  
    }, 
    togglepoolish :  (state, action) => {    
      state.twoballsize = action.payload  
    }, 
    toggledisplayon :  (state, action) => {    
      state.twoballsize = action.payload  
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


