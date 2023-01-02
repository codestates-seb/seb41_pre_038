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
		setUserInfo(state, action) {
			state = action.payload;
			return state;
		},
		editNickname(state, action) {
			state.nickname = action.payload;
			return state;
		},
		editCountry(state, action) {
			state.country = action.payload;
			return state;
		},
	},
});

// 로그인 상태
const isLogin = createSlice({
	name: 'isLogin',
	initialState: false,
	reducers: {
		setIsLogin(state, action) {
			state = action.payload;
			return state;
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

// SideNav, MyPage에서 선택한 탭 업데이트
const tab = createSlice({
	name: 'tab',
	initialState: {
		sideNav: 'Home',
		myPageNav: 'Activity',
		settingNav: 'Edit',
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
		updateSettingNav(state, action) {
			state.settingNav = action.payload;
			return state;
		},
	},
});

export const { setUserInfo, editNickname, editCountry } = user.actions;
export const { setIsLogin } = isLogin.actions;
export const { addQuestions, editQuestions, deconsteQuestions } = questions.actions;
export const { updateSideNavTab, updateMyPageNav, updateSettingNav } = tab.actions;

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
	tab: tab.reducer,
	isLogin: isLogin.reducer,
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
