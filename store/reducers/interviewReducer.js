import { createSlice } from "@reduxjs/toolkit";

/************** STATE **************/
const initialState = {
  answers: [],
  email: "",
  firstName: "",
  lastName: "",
  videoSources: [],
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
    addVideoSources(state, action) {
      let newSources = [...state.videoSources];
      let item = { src: action.payload };
      newSources.push(item);
      console.log(newSources);
      state.videoSources = newSources;
    },
  },
});

/************** EXPORTED ACTIONS & REDUCERS **************/
export default interviewSlice.reducer;
export const { addAnswer, addVideoSources } = interviewSlice.actions;
