import { devtools, persist } from "zustand/middleware";
import create from "zustand";
import { AuthSliceState } from "@/store/interface/index";

type AuthStoreProps = AuthSliceState & {
	setAuthButtons: (val: { [propName: string]: any }) => void;
	setAuthRouter: (val: string[]) => void;
};

const AuthInitState: AuthSliceState = {
	authButtons: {},
	authRouter: ["dd"]
};

// zustand持久化例子
// 默认用localStorage
export const useAuthStore = create<AuthStoreProps>()(
	// 可以用redux-devtool调试
	devtools(
		persist(
			set => ({
				...AuthInitState,
				setAuthButtons: (by: { [propName: string]: any }) => set({ authButtons: by }),
				setAuthRouter: (by: string[]) => set({ authRouter: by })
			}),
			{
				name: "authStorage"
			}
		)
	)
);
