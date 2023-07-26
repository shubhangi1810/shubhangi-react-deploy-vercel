export const setRegionInfo = (regionInfo) => {
  return {
    type: 'SET_REGION_INFO',
    payload: regionInfo,
  };
};

export const setRegion = (region) => {
  return {
    type: "SET_CURRENT_SELECTED_REGION",
    region
  }
}


  