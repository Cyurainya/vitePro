/*
 * @Author: yannis cyu
 * @Date: 2023-01-03 10:08:05
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-03 14:20:54
 * @Description: 请填写简介
 */
import LoginForm from "./components/LoginForm";
import SwitchDark from "@/components/SwitchDark";
import logo from "@/assets/images/logo.png";
import "./index.less";

const Login = () => {
	return (
		<div className="loginContainer">
			<SwitchDark />
			<div className="loginBox">
				<div className="loginLeft" />
				<div className="login-form">
					<div className="login-logo">
						<img className="login-icon" src={logo} alt="logo" />
					</div>
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default Login;
