/*
 * @Author: yannis cyu
 * @Date: 2023-01-05 14:14:57
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-05 14:15:09
 * @Description: 请填写简介
 */
import http from "@/axios";
import { Login } from "@/mock/interface";
const userLogRes = {
	code: 200,
	data: {
		access_token: "unufvdotdqxuzfbdygovfmsbftlvbn",
		userName: "user",
		code: "111"
	},
	msg: "成功"
};

const adminLogRes = {
	code: 200,
	data: {
		access_token: "bqddxxwqmfncffacvbpkuxvwvqrhln",
		userName: "admin",
		code: "111"
	},
	msg: "成功"
};

export const loginApiMock = (params: Login.ReqLoginForm) => {
	const { username } = params;
	return username === "user" ? userLogRes : adminLogRes;
};
