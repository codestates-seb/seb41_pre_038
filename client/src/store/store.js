import { configureStore, createSlice } from '@reduxjs/toolkit';

// 프로필 유저 정보 수정
const user = createSlice({
	name: 'user',
	initialState: {
		memberId: null,
		loginId: null,
		password: null,
		email: null,
		nickname: null,
		country: null,
	},
	reducers: {
		editNickname(state, action) {
			state.nickname = action.payload;
		},
		editCountry(state, action) {
			state.country = action.payload;
		},
	},
});

// 질문 추가, 수정, 삭제
const questions = createSlice({
	name: 'questions',
	initialState: [],
	reducers: {
		addQuestions(state, action) {
			state.push(action.payload);
		},
		editQuestions(state, action) {},
		deconsteQuestions(state, action) {},
	},
});

// 회원가입, 회원 탈퇴
const members = createSlice({
	name: 'members',
	initialState: [],
	reducers: {
		addMember(state, action) {
			state.push(action.payload);
		},
		deleteMember(state, action) {
			return state.filter((member) => member.memberId !== action.payload);
		},
	},
});

// SideNav, MyPage에서 선택한 탭 업데이트
const tab = createSlice({
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

export const { editNickname, editCountry } = user.actions;
export const { addQuestions, editQuestions, deconsteQuestions } = questions.actions;
export const { addMember, deleteMember } = members.actions;
export const { updateSideNavTab, updateMyPageNav } = tab.actions;

export default configureStore({
	reducer: {
		user: user.reducer,
		questions: questions.reducer,
		members: members.reducer,
		tab: tab.reducer,
	},
});
