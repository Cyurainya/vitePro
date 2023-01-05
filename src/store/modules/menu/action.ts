/*
 * @Author: yannis cyu
 * @Date: 2023-01-03 10:07:09
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-05 13:55:15
 * @Description: 请填写简介
 */
import * as types from "@/store/mutation-types";
import { getMenuListMock } from "@/mock/modules/menu";
import { Dispatch } from "react";

// * updateCollapse
export const updateCollapse = (isCollapse: boolean) => ({
	type: types.UPDATE_COLLAPSE,
	isCollapse
});

// * setMenuList
export const setMenuList = (menuList: Menu.MenuOptions[]) => ({
	type: types.SET_MENU_LIST,
	menuList
});

// ? 下面方法仅为测试使用，不参与任何功能开发
interface MenuProps {
	type: string;
	menuList: Menu.MenuOptions[];
}
// * redux-thunk
export const getMenuListActionThunk = () => {
	return async (dispatch: Dispatch<MenuProps>) => {
		const res = await getMenuListMock();
		dispatch({
			type: types.SET_MENU_LIST,
			menuList: (res.data as Menu.MenuOptions[]) ?? []
		});
	};
};

// * redux-promise《async/await》
export const getMenuListAction = async (): Promise<MenuProps> => {
	const res = await getMenuListMock();
	return {
		type: types.SET_MENU_LIST,
		menuList: res.data ? res.data : []
	};
};
