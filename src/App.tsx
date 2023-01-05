/*
 * @Author: yannis cyu
 * @Date: 2023-01-03 10:08:05
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-05 13:34:42
 * @Description: 请填写简介
 */
import { useState, useEffect } from "react";
import { HashRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

import useTheme from "@/hooks/useTheme";
import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";
import i18n from "i18next";
import "dayjs/locale/zh-cn";
import AuthRouter from "@/routers/utils/authRouter";
import Router from "@/routers/index";
import { useGlobalStore } from "@/zustand/modules/global";
import { getBrowserLang } from "@/utils/util";

const App = () => {
	const [i18nLocale, setI18nLocale] = useState(zhCN);

	const { language, assemblySize, themeConfig, setLanguage } = useGlobalStore.getState();

	// 全局使用主题
	useTheme(themeConfig);

	// 设置 antd 语言国际化
	const setAntdLanguage = () => {
		// 如果 store 中有默认语言就设置成 store 的默认语言，没有默认语言就设置成浏览器默认语言
		if (language && language == "zh") return setI18nLocale(zhCN);
		if (language && language == "en") return setI18nLocale(enUS);
		if (getBrowserLang() == "zh") return setI18nLocale(zhCN);
		if (getBrowserLang() == "en") return setI18nLocale(enUS);
	};

	useEffect(() => {
		// 全局使用国际化
		i18n.changeLanguage(language || getBrowserLang());
		setLanguage(language || getBrowserLang());
		setAntdLanguage();
	}, [language]);

	return (
		<HashRouter>
			<ConfigProvider locale={i18nLocale} componentSize={assemblySize}>
				<AuthRouter>
					<Router />
				</AuthRouter>
			</ConfigProvider>
		</HashRouter>
	);
};

export default App;
