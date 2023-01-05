import { devtools, persist } from "zustand/middleware";
import create from "zustand";
import { HOME_URL } from "@/config/config";
import { TabsSliceState } from "@/store/interface";
const TabsInitState: TabsSliceState = {
	tabsList: [{ title: "首页", path: HOME_URL }]
};
type TabStoreProps = TabsSliceState & {
	setTabsList: (val: Menu.MenuOptions[]) => void;
};
export const useTabStore = create<TabStoreProps>()(
	// 可以用redux-devtool调试
	devtools(
		persist(
			set => ({
				...TabsInitState,
				setTabsList: (val: Menu.MenuOptions[]) => set({ tabsList: val })
			}),
			{
				name: "tabStorage"
			}
		)
	)
);
