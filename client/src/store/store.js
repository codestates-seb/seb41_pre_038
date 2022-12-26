import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: {
    loginId: null,
    email: '잘 나오는지 확인!',
    nickname: null, // 수정 가능
    country: '한국', // 수정 가능
    userImage: null, // 수정 가능
    questions: null,
    answers: null,
  },
  reducers: {
    editNickname(state, action) {
      state.nickname = action.payload;
    },
    editCountry(state, action) {
      state.country = action.payload;
    },
    editUserImage(state, action) {
      state.userImage = action.payload;
    },
  },
});

export let { editNickname, editCountry, editUserImage } = user.actions;

let questions = createSlice({
  name: 'questions',
  initialState: [],
  reducers: {
    addQuestions(state, action) {
      state.push(action.payload);
    },
    editQuestions() {},
    deleteQuestions() {},
  },
});

export let { addQuestions, editQuestions, deleteQuestions } = questions.actions;

let members = createSlice({
  name: 'members',
  initialState: [],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    questions: questions.reducer,
    members: members.reducer,
  },
});
