import { configureStore, createSlice, getDefaultMiddleware } from '@reduxjs/toolkit';
// - persistReducer(config, reducer) : 인자로 받은 config 객체를 reducer함수에 적용하여, 향상된 reducer를 반환한다.
import { persistReducer } from 'redux-persist';
// - localStorage에 상태를 저장해준다.
import storage from 'redux-persist/lib/storage';
// - 기존 코드에서는 configureStore 내부에서 이 기능을 처리해줬지만,
//   persistReducer로 하나의 reducer를 전달해야 하기 때문에, combineReducers를 사용해야 한다.
import { combineReducers } from '@reduxjs/toolkit';

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

// export default configureStore({
// 	reducer: {
// 		user: user.reducer,
// 		questions: questions.reducer,
// 		members: members.reducer,
// 		tab: tab.reducer,
// 	},
// });

// 여러개의 reducer들을 하나로 합친 reducer
const reducers = combineReducers({
	user: user.reducer,
	questions: questions.reducer,
	members: members.reducer,
	tab: tab.reducer,
});

// config 객체
const persistConfig = {
	key: 'root',
	storage,
	// whitelist: [] 유지하고 싶은 값을 배열로 전달
	// blacklist: [] 유지하고 싶지 않은 값을 배열로 전달
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});

export default store;
