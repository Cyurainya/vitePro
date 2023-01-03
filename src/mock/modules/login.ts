import http from "@/axios";
import { Login } from "@/mock/interface";
/*
 * @Author: yannis cyu
 * @Date: 2023-01-03 16:50:09
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-03 17:44:34
 * @Description: 请填写简介
 */

const userLogRes = {
	code: 200,
	data: {
		access_token: "unufvdotdqxuzfbdygovfmsbftlvbn"
	},
	msg: "成功"
};

const adminLogRes = {
	code: 200,
	data: {
		access_token: "bqddxxwqmfncffacvbpkuxvwvqrhln"
	},
	msg: "成功"
};

export const loginApiMock = (params: Login.ReqLoginForm) => {
	const { username } = params;
	return username === "user" ? userLogRes : adminLogRes;
};
