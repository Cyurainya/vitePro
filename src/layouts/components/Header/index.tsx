/*
 * @Author: yannis cyu
 * @Date: 2023-01-02 22:17:18
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-05 13:40:34
 * @Description: 请填写简介
 */
import { Layout } from "antd";
import AvatarIcon from "./components/AvatarIcon";
import CollapseIcon from "./components/CollapseIcon";
import BreadcrumbNav from "./components/BreadcrumbNav";
import AssemblySize from "./components/AssemblySize";
import Language from "./components/Language";
import Theme from "./components/Theme";
import Fullscreen from "./components/Fullscreen";
import "./index.less";
import { useUserStore } from "@/store/modules/user";

const LayoutHeader = () => {
	const { Header } = Layout;
	const { userName } = useUserStore.getState();
	return (
		<Header>
			<div className="header-lf">
				<CollapseIcon />
				<BreadcrumbNav />
			</div>
			<div className="header-ri">
				<AssemblySize />
				<Language />
				<Theme />
				<Fullscreen />
				<span className="username"> {userName}</span>
				<AvatarIcon />
			</div>
		</Header>
	);
};

export default LayoutHeader;
