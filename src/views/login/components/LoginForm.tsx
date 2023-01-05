/*
 * @Author: yannis cyu
 * @Date: 2023-01-03 10:07:09
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-05 14:47:28
 * @Description: 请填写简介
 */
import md5 from "js-md5";
import { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { Login } from "@/mock/interface";
import { HOME_URL } from "@/config/config";
import { useTranslation } from "react-i18next";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { loginApiMock } from "@/mock/modules/login";
import { useUserStore } from "@/store/modules/user";
import { useTabStore } from "@/store/modules/tabs";

const LoginForm = () => {
	const { t } = useTranslation();
	const { setToken } = useUserStore.getState();
	const { setTabsList } = useTabStore.getState();
	const navigate = useNavigate();
	const [form] = Form.useForm();
	const { setUserInfo } = useUserStore.getState();
	const [loading, setLoading] = useState<boolean>(false);

	// 登录
	const onFinish = async (loginForm: Login.ReqLoginForm) => {
		try {
			setLoading(true);
			loginForm.password = md5(loginForm.password);
			const { data } = await loginApiMock(loginForm);
			const { access_token, userName, code } = data;
			setUserInfo({ userName, code });
			setToken(access_token);
			setTabsList([]);
			message.success("登录成功！");
			navigate(HOME_URL);
		} finally {
			setLoading(false);
		}
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Form
			form={form}
			name="basic"
			labelCol={{ span: 5 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			size="large"
			autoComplete="off"
		>
			<Form.Item name="username" rules={[{ required: true, message: "请输入用户名" }]}>
				<Input prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
				<Input.Password autoComplete="new-password" placeholder="密码：123456" prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className="login-btn">
				<Button
					onClick={() => {
						form.resetFields();
					}}
					icon={<CloseCircleOutlined />}
				>
					{t("login.reset")}
				</Button>
				<Button type="primary" htmlType="submit" loading={loading} icon={<UserOutlined />}>
					{t("login.confirm")}
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;
