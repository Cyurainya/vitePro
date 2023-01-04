/*
 * @Author: yannis cyu
 * @Date: 2023-01-04 18:44:47
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-04 19:05:43
 * @Description: 请填写简介
 */
import create from "zustand";

// TODO后面锁类型
type AuthSliceProps = {
	authButtons: { [propName: string]: any };
	authRouter: string[];
	setAuthButtons: (val: any) => void;
	setAuthRouter: (val: string[]) => void;
};
export const useAuthStore = create<AuthSliceProps>()(set => ({
	authButtons: {},
	authRouter: ["dd"],
	setAuthButtons: (by: any) => set({ authButtons: by }),
	setAuthRouter: (by: string[]) => set({ authRouter: by })
}));
