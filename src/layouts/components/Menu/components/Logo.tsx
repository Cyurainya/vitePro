/*
 * @Author: yannis cyu
 * @Date: 2023-01-03 10:08:05
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-03 13:35:49
 * @Description: 请填写简介
 */
import logo from "@/assets/images/logo.png";
import { connect } from "react-redux";

const Logo = (props: any) => {
	const { isCollapse } = props;
	return (
		<div className="logo-box">
			<img src={logo} alt="logo" className="logo-img" />
			{!isCollapse ? <h2 className="logo-text" /> : null}
		</div>
	);
};

const mapStateToProps = (state: any) => state.menu;
export default connect(mapStateToProps)(Logo);
