/*
 * @Author: yannis cyu
 * @Date: 2023-01-03 10:08:05
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-03 18:30:39
 * @Description: 请填写简介
 */
import ReactDOM from "react-dom/client";
import "@/styles/reset.less";
import "@/assets/iconfont/iconfont.less";
import "@/assets/fonts/font.less";
// import "antd/dist/antd.less";
import "@/styles/common.less";
import "@/language/index";
import "virtual:svg-icons-register";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import App from "@/App";

// react 18 创建（会导致 antd 菜单折叠时闪烁，等待官方修复）
ReactDOM.createRoot(document.getElementById("root")!).render(
	// * react严格模式
	// <React.StrictMode>
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
	// </React.StrictMode>
);
