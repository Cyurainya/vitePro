/*
 * @Author: yannis cyu
 * @Date: 2023-01-03 10:08:05
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-05 14:52:55
 * @Description: 请填写简介
 */
import logo from "@/assets/images/logo.png";
import { useMenuStore } from "@/store/modules/menu";

const Logo = () => {
	const { isCollapse } = useMenuStore.getState();
	return (
		<div className="logo-box">
			<img src={logo} alt="logo" className="logo-img" />
			{!isCollapse ? <h2 className="logo-text" /> : null}
		</div>
	);
};

export default Logo;
