import { ADD_NUM } from "../constants/action-types";

export const addNum = num => 
  ({ type: "ADD_NUM", payload: num });