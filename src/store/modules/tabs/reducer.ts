import { AnyAction } from "redux";
import { TabsSliceState } from "@/store/interface";
import { HOME_URL } from "@/config/config";
import produce from "immer";
import * as types from "@/store/mutation-types";

const TabsSliceState: TabsSliceState = {
	// tabsActive 其实没啥用，使用 pathname 就可以了😂
	tabsActive: HOME_URL,
	tabsList: [{ title: "首页", path: HOME_URL }]
};

// tabs reducer
const tabs = (state: TabsSliceState = TabsSliceState, action: AnyAction) =>
	produce(state, draftState => {
		switch (action.type) {
			case types.SET_TABS_LIST:
				draftState.tabsList = action.tabsList;
				break;
			case types.SET_TABS_ACTIVE:
				draftState.tabsActive = action.tabsActive;
				break;
			default:
				return draftState;
		}
	});

export default tabs;
