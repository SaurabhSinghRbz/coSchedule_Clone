import * as types from "./actiontypes";

const initialState = {
  project: [],

};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_NEW_PROJECT:
      let newprojectArr = [...state.project, payload];
      return { ...state, project: newprojectArr };

    case types.Delete_PROJECT:
      let delelteArray = state.project.filter((e) => e.refNO !== payload)
      return { ...state, project: delelteArray };

    case types.EDIT_PROJECT:
      let editedArray = state.project.map((e) => {
        if (e.refNO === payload[0]) {
          return { ...e, title: payload[1] , color: payload[2] }
        }
        else {
          return e
        }
      })
      console.log(editedArray)
      return { ...state, project: editedArray };
    case types.RESET_STATE:
      return initialState
    default:
      return state;
  }
};
