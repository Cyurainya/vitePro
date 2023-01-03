import { AnyAction } from "redux";
import { MenuSliceState } from "@/store/interface";
import produce from "immer";
import * as types from "@/store/mutation-types";

const MenuSliceState: MenuSliceState = {
	isCollapse: false,
	menuList: []
};

// menu reducer
const menu = (state: MenuSliceState = MenuSliceState, action: AnyAction) =>
	produce(state, draftState => {
		switch (action.type) {
			case types.UPDATE_COLLAPSE:
				draftState.isCollapse = action.isCollapse;
				break;
			case types.SET_MENU_LIST:
				draftState.menuList = action.menuList;
				break;
			default:
				return draftState;
		}
	});

export default menu;
