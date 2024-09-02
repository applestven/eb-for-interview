import {
	defineStore
} from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => {
		return {
			count: 0,
			userInfo: null,
			token: 123
		};
	},
	actions: {
		increment() {
			this.count++;
		},
		setUserInfo(userInfo) {
			this.userInfo = userInfo;
		},
		setToken(token) {
			this.token = token;
		}
	},
	getters: {
		getUserInfo() {
			return this.userInfo;
		},
		getToken() {
			return this.token;
		}
	},
	persist: {
		enabled: true,
		strategies: [{
			key: "your key",
			storage: localStorage,
		}, ],
	}
});