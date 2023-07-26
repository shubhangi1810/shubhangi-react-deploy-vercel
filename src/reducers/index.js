const initialState = {
    regionInfo: {},
    selectedRegion: "us"
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_CURRENT_SELECTED_REGION":
        return {
          ...state,
          selectedRegion: action.region
        }
      case 'SET_REGION_INFO':
        return {
          ...state,
          regionInfo: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  