/*
 * @Author: yannis cyu
 * @Date: 2022-09-14 15:08:52
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-05 15:13:16
 * @Description: 请填写简介
 */
import defaultTheme from "@/styles/theme/theme-default.less?inline";
import darkTheme from "@/styles/theme/theme-dark.less?inline";
import { ThemeConfigProp } from "@/store/interface";

/**
 * @description 全局主题设置
 * */
// 改成store
const useTheme = (themeConfig: ThemeConfigProp) => {
	const { weakOrGray, isDark } = themeConfig;
	const initTheme = () => {
		// 灰色和弱色切换
		const body = document.documentElement as HTMLElement;
		if (!weakOrGray) body.setAttribute("style", "");
		if (weakOrGray === "weak") body.setAttribute("style", "filter: invert(80%)");
		if (weakOrGray === "gray") body.setAttribute("style", "filter: grayscale(1)");

		// 切换暗黑模式
		let head = document.getElementsByTagName("head")[0];
		const getStyle = head.getElementsByTagName("style");
		if (getStyle.length > 0) {
			for (let i = 0, l = getStyle.length; i < l; i++) {
				if (getStyle[i]?.getAttribute("data-type") === "dark") getStyle[i].remove();
			}
		}
		let styleDom = document.createElement("style");
		styleDom.dataset.type = "dark";
		styleDom.innerHTML = isDark ? darkTheme : defaultTheme;
		head.appendChild(styleDom);
	};
	initTheme();

	return {
		initTheme
	};
};

export default useTheme;
