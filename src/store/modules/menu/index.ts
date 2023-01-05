/*
 * @Author: yannis cyu
 * @Date: 2023-01-05 13:48:24
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-05 14:52:30
 * @Description: 请填写简介
 */
import { devtools, persist } from "zustand/middleware";
import create from "zustand";
import { MenuSliceState } from "@/store/interface";

const MenuInitState: MenuSliceState = {
	isCollapse: false,
	menuList: []
};

type MenuStoreProps = MenuSliceState & {
	updateCollapse: (val: boolean) => void;
	setMenuList: (val: Array<any>) => void;
};
export const useMenuStore = create<MenuStoreProps>()(
	// 可以用redux-devtool调试
	devtools(
		persist(
			set => ({
				...MenuInitState,
				updateCollapse: (by: boolean) => set({ isCollapse: by }),
				setMenuList: (by: Array<any>) => set({ menuList: by })
			}),
			{
				name: "menuStorage"
			}
		)
	)
);
