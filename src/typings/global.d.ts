/*
 * @Author: yannis cyu
 * @Date: 2023-01-02 22:17:18
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-05 10:56:02
 * @Description: 请填写简介
 */
// * Menu
declare namespace Menu {
	interface MenuOptions {
		path: string;
		title: string;
		icon?: string;
		isLink?: string;
		close?: boolean;
		children?: MenuOptions[];
	}
}

// * Vite
declare type Recordable<T = any> = Record<string, T>;

declare interface ViteEnv {
	VITE_API_URL: string;
	VITE_PORT: number;
	VITE_OPEN: boolean;
	VITE_GLOB_APP_TITLE: string;
	VITE_DROP_CONSOLE: boolean;
	VITE_PROXY_URL: string;
	VITE_BUILD_GZIP: boolean;
	VITE_REPORT: boolean;
}

// * Dropdown MenuInfo
declare interface MenuInfo {
	key: string;
	keyPath: string[];
	/** @deprecated This will not support in future. You should avoid to use this */
	item: React.ReactInstance;
	domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}

// type utils
type PickByValueType<T extends object, valueType> = {
	// 判断值 T[key] 是否符合指定的类型
	// 如果符合，将该属性的值设置为 该属性名称的字面量类型，也就是 key
	// 否则，将属性的值设置为 never
	[key in keyof T]: T[key] extends valueType ? key : never;
};
