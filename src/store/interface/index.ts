/*
 * @Author: yannis cyu
 * @Date: 2023-01-03 17:38:14
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-05 11:29:59
 * @Description: 请填写简介
 */
import type { SizeType } from "antd/lib/config-provider/SizeContext";

/* themeConfigProp */
export interface ThemeConfigProp {
	primary: string;
	isDark: boolean;
	weakOrGray: string;
	breadcrumb: boolean;
	tabs: boolean;
	footer: boolean;
}

/* GlobalSliceState */
export interface GlobalSliceState {
	token: string;
	assemblySize: SizeType;
	language: string;
	themeConfig: ThemeConfigProp;
}

/* MenuSliceState */
export interface MenuSliceState {
	isCollapse: boolean;
	menuList: Menu.MenuOptions[];
}

/* TabsSliceState */
export interface TabsSliceState {
	tabsActive: string;
	tabsList: Menu.MenuOptions[];
}

/* BreadcrumbSliceState */
export interface BreadcrumbSliceState {
	breadcrumbList?: {
		[propName: string]: any;
	};
}

/* AuthSliceState */
export interface AuthSliceState {
	authButtons: {
		[propName: string]: any;
	};
	authRouter: string[];
}
