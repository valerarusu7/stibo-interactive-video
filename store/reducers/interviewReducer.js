import { createSlice } from "@reduxjs/toolkit";

/************** STATE **************/
const initialState = {
  answers: [],
  email: "",
  firstName: "",
  lastName: "",
};

/************** STATE SLICE **************/
const interviewSlice = createSlice({
  name: "interview",
  initialState: initialState,
  reducers: {
    addAnswer(state, action) {
      let newAnswers = [...state.answers];
      newAnswers.push(action.payload);
      state.answers = newAnswers;
    },
  },
});

/************** EXPORTED ACTIONS & REDUCERS **************/
export default interviewSlice.reducer;
export const { addAnswer } = interviewSlice.actions;
