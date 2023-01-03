/*
 * @Author: yannis cyu
 * @Date: 2023-01-03 17:20:11
 * @LastEditors: yannis
 * @LastEditTime: 2023-01-03 17:25:03
 * @Description: 请填写简介
 */
const userAuthBtnRes = {
	code: 200,
	data: {
		useHooks: {
			add: false,
			edit: false
		}
	},
	msg: "成功"
};

const adminAuthBtnRes = {
	code: 200,
	data: {
		useHooks: {
			add: true,
			delete: true
		}
	},
	msg: "成功"
};
export const getAuthorButtonsMock = () => {
	// 后端鉴权
	return adminAuthBtnRes;
};
