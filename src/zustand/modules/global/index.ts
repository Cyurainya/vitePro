/*
 * @Author: yannis cyu
 * @Date: 2023-01-05 09:52:10
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-05 14:05:10
 * @Description: 请填写简介
 */
import type { SizeType } from "antd/lib/config-provider/SizeContext";
import { devtools, persist } from "zustand/middleware";
import create from "zustand";
import { GlobalSliceState } from "@/zustand/interface";
import { ThemeConfigProp } from "@/zustand/interface";

const GlobalInitState: GlobalSliceState = {
	assemblySize: "middle",
	language: "",
	themeConfig: {
		// 默认 primary 主题颜色
		primary: "#1890ff",
		// 深色模式
		isDark: false,
		// 色弱模式(weak) || 灰色模式(gray)
		weakOrGray: "",
		// 面包屑导航
		breadcrumb: true,
		// 标签页
		tabs: true,
		// 页脚
		footer: true
	}
};

type GlobalStoreProps = GlobalSliceState & {
	setAssemblySize: (val: SizeType) => void;
	setLanguage: (val: string) => void;
	setThemeConfig: (val: ThemeConfigProp) => void;
};
export const useGlobalStore = create<GlobalStoreProps>()(
	devtools(
		persist(
			set => ({
				...GlobalInitState,
				setAssemblySize: (by: SizeType) => set({ assemblySize: by }),
				setLanguage: (by: string) => set({ language: by }),
				setThemeConfig: (by: ThemeConfigProp) => set({ themeConfig: by })
			}),
			{ name: "globalStorage" }
		)
	)
);
