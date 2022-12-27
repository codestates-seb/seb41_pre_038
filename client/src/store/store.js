import { configureStore, createSlice } from '@reduxjs/toolkit';

// 프로필 유저 정보 수정
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

// 질문 추가, 수정, 삭제
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

// SideNav, MyPage에서 선택한 탭 업데이트
let tab = createSlice({
	name: 'tab',
	initialState: {
		sideNav: 'Home',
		myPageNav: 'Activity',
	},
	reducers: {
		updateSideNavTab(state, action) {
			state.sideNav = action.payload;
			return state;
		},
		updateMyPageNav(state, action) {
			state.myPageNav = action.payload;
			return state;
		},
	},
});

export let { updateSideNavTab, updateMyPageNav } = tab.actions;

export default configureStore({
	reducer: {
		user: user.reducer,
		questions: questions.reducer,
		members: members.reducer,
		tab: tab.reducer,
	},
});
