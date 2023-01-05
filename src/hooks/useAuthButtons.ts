import { useAuthStore } from "@/zustand/modules/auth";
import { searchRoute } from "@/utils/util";
import { useLocation } from "react-router-dom";
import { routerArray } from "@/routers";

/**
 * @description 页面按钮权限 hooks
 * */
const useAuthButtons = () => {
	const { pathname } = useLocation();
	const { authButtons } = useAuthStore.getState();
	const route = searchRoute(pathname, routerArray);

	return {
		BUTTONS: authButtons[route.meta!.key!] || {}
	};
};

export default useAuthButtons;
