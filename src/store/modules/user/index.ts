/*
 * @Author: yannis cyu
 * @Date: 2023-01-05 11:36:36
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-05 15:57:40
 * @Description: 请填写简介
 */
import { devtools, persist } from "zustand/middleware";
import create from "zustand";
import { userInfoState } from "@/store/interface";

export type UserStoreProps = userInfoState & {
	setToken: (val: string) => void;
	setUserInfo: (val: userInfoState) => void;
};

const userInfoInitState: userInfoState = {
	userName: "",
	code: "",
	token: "11"
};

export const useUserStore = create<UserStoreProps>()(
	devtools(
		persist(
			set => ({
				...userInfoInitState,
				setToken: (by: string) => set({ token: by }),
				setUserInfo: (by: userInfoState) =>
					set({
						userName: by.userName,
						code: by.code
					})
			}),
			{
				name: "userStorage"
			}
		)
	)
);
